"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    city: "",
    date: "",
    time: "",
  });

  // Update form values
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact) {
      alert("Please fill in your Name and Contact Number.");
      return;
    }

    // ✅ Your WhatsApp number (without +)
    const whatsappNumber = "917014116801";

    // WhatsApp message
    const text =
      `Hello Adidev Studio 👋,%0A%0A` +
      `I would like to book an appointment with the following details:%0A%0A` +
      `👤 Name: ${form.name}%0A` +
      `📞 Contact: ${form.contact}%0A` +
      `🏙️ City: ${form.city || "N/A"}%0A` +
      `📅 Date: ${form.date || "N/A"}%0A` +
      `⏰ Time: ${form.time || "N/A"}%0A%0A` +
      `Thank you!`;

    // WhatsApp URL
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    // ✅ Open WhatsApp directly
    window.open(url, "_blank");

    // Reset form
    setForm({
      name: "",
      contact: "",
      city: "",
      date: "",
      time: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-4 border rounded-lg shadow-md bg-white"
    >
      <h2 className="text-xl font-semibold text-center">
        Book an Appointment
      </h2>

      {/* Name */}
      <div>
        <Label>Name *</Label>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Contact */}
      <div>
        <Label>Contact Number *</Label>
        <Input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="Enter contact number"
          required
        />
      </div>

      {/* City */}
      <div>
        <Label>City</Label>
        <Input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Enter your city"
        />
      </div>

      {/* Date */}
      <div>
        <Label>Date</Label>
        <Input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      {/* Time */}
      <div>
        <Label>Time</Label>
        <Input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-black hover:bg-gray-800 text-white"
      >
        Share via WhatsApp
      </Button>
    </form>
  );
}
