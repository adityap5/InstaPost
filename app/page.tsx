"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Home,
  Users,
  X,
  MessageSquare,
  Send,
  Settings,
  HelpCircle,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreHorizontal,
  ArrowLeft,
  Plus,
  Info,
  Filter,
  Phone,
  Video,
  ImageIcon,
  Mail,
  Camera,
  PlusIcon,
  Search,
  User2
} from "lucide-react"
import Image from "next/image"

const samplePosts = [
  { id: 1, image: "/dd.jpeg", title: "WhatsApp Post" },
  { id: 2, image: "/doom.jpeg", title: "Business Growth" },
  { id: 3, image: "/tony.jpeg", title: "Tech Update" },
  { id: 4, image: "/selmon.jpeg", title: "Marketing Tips" },
]

const exampleKeywords = ["Price", "Link", "Shop"]

export default function WorkflowBuilder() {
  const [visibleSections, setVisibleSections] = useState(1)
  const [selectedPost, setSelectedPost] = useState("specific")
  const [selectedPostId, setSelectedPostId] = useState(1)
  const [selectedKeyword, setSelectedKeyword] = useState("Price")
  const [dmEnabled, setDmEnabled] = useState(true)
  const [dmMessage, setDmMessage] = useState(
    "Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec ✨",
  )
  const [buttonText, setButtonText] = useState("Send me the link")
  const [followUpMessage, setFollowUpMessage] = useState("Write a message")
  const [showGoLive, setShowGoLive] = useState(false)

  const handleNext = (section: number) => {
    if (section < 3) {
      setVisibleSections(section + 1)
    } else {
      setShowGoLive(true)
    }
  }

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeyword(keyword)
  }

  const getMobileView = () => {
    if (visibleSections >= 3) return "dm"
    if (visibleSections >= 2) return "comments"
    return "post"
  }

  const getSelectedPostImage = () => {
    const selectedPostData = samplePosts.find((post) => post.id === selectedPostId)
    return selectedPostData?.image || "/placeholder.svg"
  }

  const getSelectedPostTitle = () => {
    const selectedPostData = samplePosts.find((post) => post.id === selectedPostId)
    return selectedPostData?.title || "Post"
  }

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">m</span>
        </div>
        <div className="flex flex-col space-y-3">
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Users className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 bg-blue-50 text-blue-600">
            <X className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <MessageSquare className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Send className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex-1" />
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <HelpCircle className="w-5 h-5" />
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
          <h1 className="text-xl font-semibold">
          When someone comments on
          </h1>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-500">Preview</span>
            {showGoLive && <Button className="bg-black text-white hover:bg-gray-800">Go Live</Button>}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Workflow Configuration - Scrollable */}
          <div className="w-96 overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* Section 1: Post Selection - Always visible */}
              <div className="space-y-4">
                <RadioGroup value={selectedPost} onValueChange={setSelectedPost}>
                  <div className="space-y-4 bg-gray-100 rounded-sm p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="specific" id="specific" />
                      <Label htmlFor="specific" className="font-medium">
                        a specific post or reel
                      </Label>
                    </div>
                    {selectedPost === "specific" && (
                      <div className="ml-6">
                        <div className="grid grid-cols-4 gap-2 mb-2">
                          {samplePosts.map((post) => (
                            <div
                              key={post.id}
                              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                                selectedPostId === post.id ? "border-blue-500" : "border-transparent"
                              }`}
                              onClick={() => setSelectedPostId(post.id)}
                            >
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                width={80}
                                height={80}
                                className="w-full h-20 object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <Button variant="link" className="text-blue-600 p-0 h-auto">
                          Show All
                        </Button>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any" />
                      <Label htmlFor="any">any post or reel</Label>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        PRO
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="next" id="next" />
                      <Label htmlFor="next">next post or reel</Label>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        PRO
                      </Badge>
                    </div>
                  </div>
                </RadioGroup>
                {visibleSections === 1 && (
                  <div>
                    <Button onClick={() => handleNext(1)} className="bg-gray-50 hover:text-white border-gray-300 text-black">
                      Next
                    </Button>
                  </div>
                )}
              </div>

              {/* Section 2: Comment Configuration - Visible after first Next */}
              {visibleSections >= 2 && (
                <div className="space-y-4 bg-gray-100 rounded-sm p-3">
                  <h2 className="text-lg font-semibold">And this comment has</h2>
                  <RadioGroup defaultValue="specific-words">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="specific-words" id="specific-words" />
                        <Label htmlFor="specific-words" className="font-medium">
                          a specific word or words
                        </Label>
                      </div>
                      <div className="ml-6 space-y-3">
                        <div className="text-sm text-gray-500">Use commas to separate words</div>
                        <div className="space-y-2">
                          <div className="text-sm text-gray-600">For example:</div>
                          <div className="flex flex-wrap gap-2">
                            {exampleKeywords.map((keyword) => (
                              <Badge
                                key={keyword}
                                variant="secondary"
                                className={`cursor-pointer transition-colors ${
                                  selectedKeyword === keyword
                                    ? "bg-blue-100 text-blue-700 border-blue-300"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                                onClick={() => handleKeywordClick(keyword)}
                              >
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any-word" id="any-word" />
                        <Label htmlFor="any-word">any word</Label>
                      </div>
                    </div>
                  </RadioGroup>
                  {visibleSections === 2 && (
                    <div className="pt-6">
                      <Button onClick={() => handleNext(2)} className="bg-gray-50 hover:text-white border-gray-300 text-black">
                        Next
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Section 3: DM Configuration - Visible after second Next */}
              {visibleSections >= 3 && (
                <div className="space-y-4 bg-gray-100 rounded-sm p-3">
                  <h2 className="text-lg font-semibold">They will get</h2>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dm-toggle" className="font-medium ">
                      an opening DM
                    </Label>
                    <Switch className="text-green-500" id="dm-toggle" checked={dmEnabled} onCheckedChange={setDmEnabled} />
                  </div>
                  {dmEnabled && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <Textarea
                        placeholder="Enter your DM message..."
                        value={dmMessage}
                        onChange={(e) => setDmMessage(e.target.value)}
                        className="min-h-[100px] resize-none"
                      />
                      <input
                        type="text"
                        placeholder="Button text"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                        <Info className="w-4 h-4 mr-1" />
                        Why does an Opening DM matter?
                      </Button>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">a DM with the link</Label>
                        <Textarea
                          placeholder="Follow-up message..."
                          value={followUpMessage}
                          onChange={(e) => setFollowUpMessage(e.target.value)}
                          className="min-h-[80px] resize-none"
                        />
                        <div className="text-sm text-gray-500">Create the DM you'd like to send</div>
                        <Button variant="outline" className="w-full bg-transparent">
                          <Plus className="w-4 h-4 mr-2" />
                          Add A Link
                        </Button>
                      </div>
                    </div>
                  )}
                  {!showGoLive && (
                    <div className="pt-6">
                      <Button onClick={() => handleNext(3)} className="bg-gray-50 hover:text-white border-gray-300 text-black">
                        Next
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Preview - Fixed */}
          <div className="flex-1 flex items-center justify-center p-6 relative">
            <div className="fixed" style={{ width: "300px", height: "580px" }}>
              <div className="bg-zinc-800 rounded-3xl p-2 h-full">
                <div className="bg-black rounded-2xl h-full overflow-hidden">
                  {/* Post View */}
                  {getMobileView() === "post" && (
                    <div className="h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center p-3 text-white text-sm">
                        <ArrowLeft className="w-5 h-5" />
                        <div className="text-center">
                          <div className="text-xs text-gray-400">BOTSPACEHQ</div>
                          <div className="font-medium">Posts</div>
                        </div>
                        <div className="w-3 h-3" />
                      </div>
                      {/* Post Header */}
                      <div className="flex items-center justify-between px-3 py-1 text-white">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-xs">+</span>
                          </div>
                          <span className="text-xs font-medium">botspacehq</span>
                        </div>
                        <MoreHorizontal className="w-5 h-5" />
                      </div>
                      {/* Post Image - Now shows selected post image */}
                      <div className="relative">
                        <Image
                          src={getSelectedPostImage() || "/placeholder.svg"}
                          alt={getSelectedPostTitle()}
                          width={280}
                          height={300}
                          className="w-full h-[300px] object-cover"
                        />
                      </div>
                      {/* Post Actions */}
                      <div className="flex items-center justify-between p-3 text-white">
                        <div className="flex items-center space-x-4">
                          <div className="flex"> 

                          <Heart className="w-4 h-4" /><p className="text-xs">18</p>
                          </div>
                          <div className="flex"> 

                          <MessageCircle className="w-4 h-4" /><p className="text-xs">0</p>
                          </div>
                          <Share2 className="w-4 h-4" />
                        </div>
                        <Bookmark className="w-4 h-4" />
                      </div>
                      {/* Post Caption */}
                      <div className="px-3 pb-3 text-zinc-300 tracking-tighter text-xs">
                        <span className="font-bold">botspacehq</span> WhatsApp now connects 3 billion users, a
                        milestone reflecting its influence in messaging. Thanks to Meta's strides in AI and business
                        tools, WhatsApp not only enhances personal communication but also empowers businesses with
                        robust AI features. Looking to ride this wave? BotSpace, a Meta Business Partner, helps your
                        business shine on WhatsApp.
                      </div>
                      <div className="relative bottom-20 border-t p-3  bg-black border-black">
                        <div className="flex items-center mb-4">
                            <div className="flex space-x-8 px-2">
                              <Home className="w-5 h-5 text-white rounded-full" />
                              <Search className="w-5 h-5 text-white rounded-full" />
                              <PlusIcon className="w-5 h-5 text-white border rounded-full" />
                              <Mail className="w-5 h-5 text-white rounded-full" />
                              <User2 className="w-5 h-5 text-white border rounded-full" />
                            </div>
                          
                        </div>
                        <div className="h-1 w-28 mt-2 rounded-3xl bg-white mx-auto"></div>
                      </div>
                    </div>
                  )}

                  {/* Comments View */}
                  {getMobileView() === "comments" && (
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="flex justify-between items-center p-3 text-white text-sm border-b border-gray-700">
                        <ArrowLeft className="w-5 h-5" />
                        <div className="text-center">
                          <div className="text-xs text-gray-400">BOTSPACEHQ</div>
                          <div className="font-medium">Posts</div>
                        </div>
                        <MoreHorizontal className="w-5 h-5" />
                      </div>

                      {/* Post Header */}
                      <div className="flex items-center justify-between p-3 text-white">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-xs">+</span>
                          </div>
                          <span className="text-sm font-medium">botspacehq</span>
                        </div>
                        <MoreHorizontal className="w-5 h-5" />
                      </div>

                      {/* Post Image - Shows selected post */}
                      <div className="relative opacity-50">
                        <Image
                          src={getSelectedPostImage() || "/placeholder.svg"}
                          alt={getSelectedPostTitle()}
                          width={280}
                          height={200}
                          className="w-full h-[200px] object-cover"
                        />
                      </div>

                      {/* Comments Header */}
                      <div className="flex justify-between items-center p-3 text-white text-sm rounded-t-lg border-b border-gray-700">
                        <div className="font-medium">Comments</div>
                        <Filter className="w-5 h-5" />
                      </div>

                      {/* Comments List */}
                      <div className="flex-1 p-3 space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gray-600 rounded-full" />
                          <div className="flex-1">
                            <div className="text-white text-xs">
                              <span className="font-medium">Username</span>
                              <span className="text-gray-400 ml-2">Now</span>
                            </div>
                            <div className="text-white text-xs mt-1">{selectedKeyword}</div>
                            <div className="text-gray-400 text-xs mt-1">Reply</div>
                          </div>
                          <Heart className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>

                      {/* Comment Input */}
                      <div className="p-3 border-t border-gray-700">
                      <div className="flex justify-center mt-2 space-x-2">
                          <span className="text-lg">❤️</span>
                          <span className="text-lg">🙌</span>
                          <span className="text-lg">🔥</span>
                          <span className="text-lg">👏</span>
                          <span className="text-lg">😢</span>
                          <span className="text-lg">😍</span>
                          <span className="text-lg">😮</span>
                          <span className="text-lg">😂</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gray-600 rounded-full" />
                          <div className="flex-1 bg-gray-800 rounded-full px-4 py-2">
                            <span className="text-gray-400 text-xs">Add a comment for username...</span>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  )}

                  {/* DM View */}
                  {getMobileView() === "dm" && (
                    <div className="h-full flex flex-col">
                      {/* DM Header */}
                      <div className="flex items-center text-xs justify-between p-3 text-white border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                          <ArrowLeft className="w-3 h-3" />
                          <div className="w-6 h-6 bg-gray-600 rounded-full" />
                          <span className="font-medium">botspacehq</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4" />
                          <Video className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Messages - We are the business user */}
                      <div className="flex-1 p-3 space-y-3">
                        {/* Our opening message */}
                        <div className="bg-[#202020] rounded-2xl p-3 max-w-[85%] mr-auto">
                          <div className="text-zinc-300 text-xs whitespace-pre-wrap">{dmMessage}</div>
                          
                          <div className="text-center justify-center mt-2 w-full bg-zinc-700 rounded-lg px-4 py-1">
                            <span className="text-white text-sm">{buttonText}</span>
                        </div>
                       
                        
                        </div>
                        {/* User clicks button */}
                        <div className="bg-violet-700 ml-auto rounded-2xl p-3 max-w-[50%]">
                          <div className="text-white text-xs">{buttonText}</div>
                        </div>
                        {/* Our follow-up message */}
                        <div className="bg-[#202020] rounded-2xl p-3 max-w-[80%] mr-auto">
                          <div className="text-white text-xs">{followUpMessage}</div>
                        </div>
                      </div>
                      {/* Message Input */}
                      <div className="p-3 border-t border-gray-700">
                        <div className="flex items-center">
                          <div className="flex items-center justify-between w-full bg-zinc-800 rounded-full px-1 py-1">
                            <div className="flex items-center space-x-1">

                          <Camera className="w-8 p-2 h-8 font-bold bg-blue-600 text-white rounded-full"/>
                            <span className="text-gray-400 text-sm">Message...</span>
                            </div>
                            <div className="flex space-x-1">

                          <ImageIcon className="w-5 h-5 text-white rounded-full" />
                          <Mail className="w-5 h-5 text-white rounded-full" />
                          <PlusIcon className="w-5 h-5 text-white border rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Navigation Tabs - Fixed position */}
            <div className="fixed bottom-2 right-80 transform -translate-x-1/2">
              <div className="flex bg-white rounded-full shadow-lg border border-gray-200 p-1">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    getMobileView() === "post" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Post
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    getMobileView() === "comments" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Comments
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    getMobileView() === "dm" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  DM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
