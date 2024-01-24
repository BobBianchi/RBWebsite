import React from "react";

export default function HeroBanner() {
    return (
        <header style={{ paddingLeft: 0 }}>
            <div
                className="p-5 text-center bg-image"
                style={{
                    backgroundImage:
                        "url('https://mdbootstrap.com/img/new/slides/041.webp')",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    height: 400,
                }}
            >
                <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Bobby Bianchi</h1>
                            <h4 className="mb-3">The Website</h4>
                            <a
                                className="btn btn-outline-light btn-lg"
                                href="#!"
                                role="button"
                            >
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
