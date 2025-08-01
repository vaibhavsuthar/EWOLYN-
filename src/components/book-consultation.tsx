
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from 'date-fns';

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", 
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export function BookConsultation({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSchedule = () => {
    if (!date || !selectedTime) {
      alert("Please select a date and time slot.");
      return;
    }
    const formattedDate = format(date, "PPP"); // e.g., "Jun 20, 2024"
    const message = `Hello Ewolyn, I would like to book a consultation on ${formattedDate} at ${selectedTime}. Thank you.`;
    const whatsappUrl = `https://wa.me/917777941611?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };
  
  const isDateInPast = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[800px] grid-rows-[auto_1fr_auto] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Book a Consultation</DialogTitle>
          <DialogDescription>
            Select a date and time that works for you.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={isDateInPast}
            />
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">
              {date ? `Available slots for ${format(date, "PPP")}` : "Select a date"}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {timeSlots.map(time => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  disabled={!date}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button 
            onClick={handleSchedule}
            disabled={!date || !selectedTime}
          >
            Schedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
