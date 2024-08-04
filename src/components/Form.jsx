import React, { useState, useRef } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import { IconStar } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SoundOnHoverAndClick from "./design/Sound/SoundOnHoverAndClick";

export function Form() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [remainingChars, setRemainingChars] = useState(300);
    const formRef = useRef(null);

    const handleMessageChange = (e) => {
        const value = e.target.value;
        const length = value.length;
        if (length > 300) {
            setMessageError("Message cannot exceed 80 characters");
        } else {
            setMessageError("");
            setMessage(value);
            setRemainingChars(300 - length);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (message.length > 300) {
            toast.error("Message cannot exceed 80 characters");
            return;
        }

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            title: e.target.title.value,
            message,
            rating,
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API}/feedback`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const result = await response.json();
                toast.success("Form submitted successfully");
                console.log("Form submitted successfully", result);
                if (formRef.current) {
                    formRef.current.reset();
                }
                setRating(0);
                setMessage("");
                setRemainingChars(300);
            } else {
                toast.error("Form submission failed");
                console.error("Form submission failed", response.statusText);
            }
        } catch (error) {
            toast.error("Error submitting form");
            console.error("Error submitting form", error);
        }
    };

    return (
        <div className="max-w-lg w-full rounded-none md:rounded-2xl  shadow-input">
            <p className="h2 font-bold text-n-2 max-w-8xl leading-relaxed lg:leading-snug text-center">Feedback Me</p>
            <ToastContainer className="mt-15" />
            <form className="my-8" onSubmit={handleSubmit} ref={formRef}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        type="text"
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="CEO of XYZ Company"
                        type="text"
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        type="email"
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <Input
                        id="message"
                        name="message"
                        placeholder="Great service!"
                        type="text"
                        value={message}
                        onChange={handleMessageChange}
                        maxLength={300}
                    />
                    <div className="text-sm text-gray-500 mt-1">
                        {messageError || `${remainingChars} characters left`}
                    </div>
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label>Rating</Label>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                filled={star <= rating}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn bg-n-6 w-full text-white rounded-md h-10 font-medium shadow-n-5"
                    type="submit"
                >
                    Send &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

const Star = ({ filled, onClick }) => (
    <IconStar
        className={`h-6 w-6 cursor-pointer ${
            filled ? "text-color-6" : "text-n-5"
        }`}
        onClick={onClick}
    />
);
