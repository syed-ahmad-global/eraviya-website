"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Minimize2, Paperclip, File, Image } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ChatFile {
  id: string
  name: string
  size: number
  type: string
}

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  file?: ChatFile
}

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB in bytes

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [attachedFile, setAttachedFile] = useState<ChatFile | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! 👋 How can we help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  // Get file icon based on type
  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) {
      return <Image className="h-4 w-4" />
    }
    return <File className="h-4 w-4" />
  }

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      alert(`File size exceeds 10MB limit. Your file is ${formatFileSize(file.size)}.`)
      return
    }

    const chatFile: ChatFile = {
      id: Date.now().toString(),
      name: file.name,
      size: file.size,
      type: file.type,
    }

    setAttachedFile(chatFile)

    // Reset file input so same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Handle file removal
  const handleFileRemove = () => {
    setAttachedFile(null)
  }

  // Handle send message
  const handleSendMessage = () => {
    const trimmedValue = inputValue.trim()
    const hasContent = trimmedValue || attachedFile

    if (!hasContent) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: trimmedValue || (attachedFile ? "Sent a file" : ""),
      sender: "user",
      timestamp: new Date(),
      file: attachedFile || undefined,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setAttachedFile(null)

    // Simulate bot response
    setTimeout(() => {
      let botText = "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services."

      if (userMessage.file) {
        botText = `Thanks for sharing "${userMessage.file.name}". Our team will review it and get back to you shortly!`
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const canSend = inputValue.trim() || attachedFile

  return (
    <>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileSelect}
        aria-label="Attach file"
      />

      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center",
            "rounded-full bg-electric text-electric-foreground shadow-lg",
            "transition-all hover:scale-110 hover:shadow-xl",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "dark:bg-electric dark:text-electric-foreground"
          )}
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]",
            "transition-all duration-300 ease-in-out",
            "md:bottom-6 md:right-6"
          )}
        >
          <Card className="overflow-hidden shadow-xl">
            {/* Header */}
            <CardHeader className={cn(
              "flex flex-row items-center justify-between",
              "border-b border-border bg-electric px-4 py-3",
              "dark:bg-electric"
            )}>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-electric-foreground" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-electric-foreground">
                    Chat with us
                  </span>
                  <span className="text-xs text-electric-foreground/80">
                    We typically reply within minutes
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setIsOpen(false)}
                  className="text-electric-foreground hover:bg-electric-foreground/10"
                  aria-label="Minimize chat"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setIsOpen(false)}
                  className="text-electric-foreground hover:bg-electric-foreground/10"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            {/* Messages Area */}
            <CardContent className="flex h-80 flex-col p-0">
              <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex w-max max-w-[85%] flex-col gap-1 rounded-lg px-3 py-2 text-sm",
                      message.sender === "user"
                        ? "ml-auto bg-electric text-electric-foreground dark:bg-electric dark:text-electric-foreground"
                        : "mr-auto bg-muted text-muted-foreground"
                    )}
                  >
                    <p>{message.text}</p>
                    {message.file && (
                      <div className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5",
                        message.sender === "user"
                          ? "bg-electric-foreground/10"
                          : "bg-background/50"
                      )}>
                        {getFileIcon(message.file.type)}
                        <div className="flex flex-col">
                          <span className="text-xs font-medium truncate max-w-[150px]">
                            {message.file.name}
                          </span>
                          <span className="text-[10px] opacity-70">
                            {formatFileSize(message.file.size)}
                          </span>
                        </div>
                      </div>
                    )}
                    <span
                      className={cn(
                        "text-xs opacity-70",
                        message.sender === "user"
                          ? "text-electric-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-border p-3">
                {/* File Preview */}
                {attachedFile && (
                  <div className="mb-2 flex items-center gap-2 rounded-md bg-muted px-2 py-1.5">
                    {getFileIcon(attachedFile.type)}
                    <div className="flex flex-1 flex-col min-w-0">
                      <span className="text-xs font-medium truncate">
                        {attachedFile.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {formatFileSize(attachedFile.size)}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={handleFileRemove}
                      className="h-6 w-6 shrink-0"
                      aria-label="Remove file"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => fileInputRef.current?.click()}
                    className="shrink-0 text-muted-foreground hover:text-foreground"
                    aria-label="Attach file"
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!canSend}
                    className="bg-electric text-electric-foreground hover:bg-electric/90 disabled:opacity-50 shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Powered by Eraviya Solutions • Max file size: 10MB
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
