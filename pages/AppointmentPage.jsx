
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
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
import AppointmentCard from "../components/AppointmentCard";


export default function AppointmentPage() {


  return (
    <section className="p-2 sm:h-[110vh]">
      <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-2 h-full">
        {/* image  */}
        <div className="sm:col-span-2 p-2 flex justify-center items-center h-full bg-[#fff7f2]">
          <img src="/schedule2.svg" alt="banner" className="max-h-full max-w-full object-fill" />
        </div>

        {/* card  */}
         <div className="sm:col-span-3 flex justify-center p-3 md:p-2 w-full ">
          <div className="sm:max-h-[90vh] sm:overflow-y-auto w-full p-3 hide-scrollbar">
            <AppointmentCard />
          </div>
        </div>
      </div>
    </section>
  );
}