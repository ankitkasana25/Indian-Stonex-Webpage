import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Calendar } from "../components/ui/calendar";
import { Label } from "../components/ui/label";

export default function AppointmentCard() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");

  const timeSlots = [
    "10:00 AM", "10:45 AM", "11:30 AM", "12:15 PM",
    "1:00 PM", "1:45 PM", "2:30 PM", "3:15 PM",
    "4:00 PM", "4:45 PM", "5:30 PM", "6:15 PM", "7:00 PM",
  ];

const handleWhatsApp = () => {
  if (!name || !contact) {
    alert("Please fill in your Name and Contact Number.");
    return;
  }

  const message = `Hello, I want to book an appointment.\nName: ${name}\nContact: ${contact}\nCity: ${city}\nDate: ${date.toDateString()}\nTime: ${time}`;
  const phoneNumber = "917014116801"; // WhatsApp number without + or 0
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
};


  return (
    <Card className="sm:w-[70%] border-none shadow-2xl bg-white/90 backdrop-blur rounded-xl m-auto">
      <CardContent className="sm:p-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-3xl font-[500] text-gray-900">Book Your Appointment</h2>
          <p className="text-gray-500 text-sm">Choose a date, time, and share your details</p>
        </div>

        {/* Calendar */}
        <div className="flex flex-col items-center">
          <Label className="mb-2 font-semibold text-gray-700">Select Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="contact">Contact Number *</Label>
            <Input
              id="contact"
              placeholder="Enter contact number"
              className="mt-1"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Enter your city"
              className="mt-1"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>

        {/* Time Slot */}
        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time</Label>
          <select
            id="time"
            className="w-full mt-1 border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select Time</option>
            {timeSlots.map((slot, idx) => (
              <option key={idx} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        {/* WhatsApp Button */}
        <div className="w-full flex items-end justify-end">
          <Button
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg shadow-md"
          >
            Share via WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
