import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function SpeedDial() {
  const actions = [
    { icon: <FaInstagram />, label: "Instagram", href: 'https://www.instagram.com/indian_stonex?igsh=dzA3aWpoNXF1dGVk' },
    { icon: <FiFacebook />, label: "Facebook", href: 'https://www.facebook.com/share/1BEsC7YXEM/' },
    { icon: <FiYoutube />, label: "YouTube", href: 'https://youtube.com/@indianstonex-c3i?si=Z1i5Ge1sLZyp7Tdo' },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: 'https://www.linkedin.com/in/indian-stonex-091ab1385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <FaWhatsapp />, label: "Whatsapp", href: ' https://wa.me/+917014116801' },
    { icon: <IoMdCall />, label: "Call", href: 'tel:+917014116801' },
    { icon: <FaPinterestP />, label: "Pinterest", href: 'https://pin.it/4Y2BLCCQ8' },
    
  ];

  const [open, setOpen] = useState(true);

  return (
    // wrapper contains both button and actions so moving to actions keeps pointer "inside" this wrapper
    <div
      className="relative flex flex-col items-end z-50"
    >
      {/* Action Buttons (positioned above the main button) */}
      <div
        className={`absolute bottom-full right-0 mb-2 flex flex-col items-end space-y-2 transition-all duration-150
        `}
      >
        {actions.map((action) => (
          <Link href={action.href}>
            <Button
              key={action.label}
              size="icon"
              variant="secondary"
              className="rounded-full shadow-lg hover:cursor-pointer hover:scale-110"
              onClick={() => console.log(action.label)}
            >
              {action.icon}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
