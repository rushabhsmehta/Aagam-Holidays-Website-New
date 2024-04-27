import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ContactUsPopOver() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Contact Form</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Contact Us</h4>
            <p className="text-sm text-muted-foreground">
              Please fill out the form below.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                className="col-span-2 h-8"
              />
            </div>
            <Button variant="default" className="col-span-3">Submit</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}