import React from "react";
import Image from "next/image";

function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col p-4 w-full">
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2 my-auto">
                    <h1 className="text-5xl p-6 font-semibold">About</h1>
                    <p className="p-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus, eius? Porro rerum eveniet dolores, cum magnam
                        modi dolor inventore, consectetur sunt, laboriosam
                        incidunt sit iste molestias placeat a fugiat itaque?
                    </p>
                </div>
                <div className="w-1/2">
                    <Image src="/img.png" alt="" width={1000} height={1000} />
                </div>
            </div>
        </main>
    );
}

export default AboutPage;
