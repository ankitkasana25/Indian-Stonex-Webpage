
import { useState } from "react";
import { Button } from "../components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input";
import { Calendar } from "../components/ui/calendar";
import { Label } from "../components/ui/label";
import { cn } from "../lib/utils";
import {
    RadioGroup,
    RadioGroupItem,
} from "../components/ui/radio-group"
import { Store } from 'lucide-react';
import { MdOutlineTempleHindu } from "react-icons/md";


export default function AppointmentCard() {
    const [service, setService] = useState("store");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);

    const timeSlots = [
        "10:00 AM", "10:45 AM", "11:30 AM", "12:15 PM",
        "1:00 PM", "1:45 PM", "2:30 PM", "3:15 PM",
        "4:00 PM", "4:45 PM", "5:30 PM", "6:15 PM", "7:00 PM",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Appointment booked for ${service} on ${date.toDateString()} at ${time}`);
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
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your name" className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="contact">Contact Number</Label>
                        <Input id="contact" placeholder="Enter contact number" className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Enter your city" className="mt-1" />
                    </div>
                </div>


                {/* Time Slot */}
                <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <select
                        id="time"
                        className="w-full mt-1 border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        {timeSlots.map(slot => (
                            <option value={slot}>{slot}</option>
                        ))}
                    </select>
                </div>


                {/* Submit Button */}
                <div className="w-full flex items-end justify-end">
                    <Button className=" bg-theme hover:bg-[#ff9857] text-white py-2 rounded-lg shadow-md">
                        Confirm Appointment
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}