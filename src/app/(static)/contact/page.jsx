import React from "react";
import Image from "next/image";
import Button from "@/components/Buttons/Button.jsx";

function ContactPage() {
    return (
        <div className="flex my-12 mx-auto">
            <div className="w-2/5 mx-auto my-auto">
                <Image src="/img.png" alt="" width={1000} height={1000} />{" "}
                <Image />
            </div>
            <div className="contact-form flex flex-col justify-center gap-4 w-2/5 mx-auto text-sm">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-3 rounded-md bg-slate-950"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-3 rounded-md bg-slate-950"
                />
                <input
                    type="number"
                    placeholder="Phone Number"
                    className="p-3 rounded-md bg-slate-950"
                />
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="p-3 rounded-md bg-slate-950"
                ></textarea>
                <Button>Send</Button>
            </div>
        </div>
    );
}

export default ContactPage;
