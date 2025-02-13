import { useEffect, useRef } from "react";
import { FooterChilds, HeaderChilds } from "../childs";
import Forgot from "../../../assets/Forgot.jpg"
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../global/authStore";
export const EmailVerification = () => {
    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).backgroundColor;
        document.body.style.backgroundColor = "#FFFCF8";
        return () => {
            document.body.style.backgroundColor = originalStyle;
        };
    }, []);

    const [code, setCode] = useState<string[]>(Array(6).fill(""));


    const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        console.log(newCode);

    };



    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
            inputRefs.current[index - 1].focus();
        }
    };

    const navigate = useNavigate();
    const {verifyEamil  } : any = useAuthStore();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = code.join("");
        console.log("Form Data:", data);
        // API fetch Logique

        try {
            await verifyEamil(data);
            navigate("/authentication/valid")
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[120px]">
            <HeaderChilds
                h3Content="Confirmation code"
                pContent="Enter your verification code"
                imgSrc={Forgot}
            />

            <div className="p-1 flex justify-center space-x-2">
                <form action="" onSubmit={onSubmit}>
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            className="text-center h-12 w-12 m-1 rounded-[7px] border-1 border-gray-400 focus:border-gray-100"
                            ref={(el) => {
                                if (el) inputRefs.current[index] = el;
                            }}
                            onInput={(e) => handleInput(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    ))}
                    <div className="mt-2 p-1">
                        <button
                            type="submit"
                            className="text-[15px] w-full flex justify-center py-2 px-4 border 
                            border-transparent rounded-md text-sm font-medium hover:shadow-sm"
                            style={{ backgroundColor: "#F5F3F1" }}
                        >
                            Confirm the code
                        </button>
                    </div>
                </form>
            </div>


            <FooterChilds buttonContent="Back to login" />
        </section>
    );
};