import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Me</h1>
      <div className="space-y-8">
        <p className="text-lg">
          Feel free to reach out to me using the form below or connect with me on social media.
        </p>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="min-h-[150px]"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="pt-8 border-t">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Other Ways to Connect</h2>
          <div className="space-y-2">
            <p>Email: mail@example.com</p>
            <p>Google Scholar: [Link to profile]</p>
          </div>
        </div>
      </div>
    </div>
  )
}

