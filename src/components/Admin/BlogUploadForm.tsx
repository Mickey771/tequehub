"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GoUpload, GoCheck } from "react-icons/go";

const BlogUploadForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [image, setImage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // In a real app, upload to server/storage. Here we simulate using a local URL.
            const url = URL.createObjectURL(file);
            setImage(url);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset form or persist locally
            console.log({ title, content, excerpt, image });
            alert("Blog post 'uploaded' successfully! (Note: Persistence requires a backend)");
            setTitle("");
            setContent("");
            setExcerpt("");
            setImage(null);
        }, 1500);
    };

    return (
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold font-['Clash Display'] mb-6">Upload New Blog Post</h2>

            {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                    <GoCheck className="text-xl" />
                    <span>Blog post published successfully!</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Blog Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#caef45] focus:ring-1 focus:ring-[#caef45] outline-none font-['Sora'] transition-colors"
                        placeholder="Enter an engaging title"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                    <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#caef45] focus:ring-1 focus:ring-[#caef45] outline-none font-['Sora'] transition-colors resize-none"
                        placeholder="Short summary for the card view..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content (HTML allowed)</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={10}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#caef45] focus:ring-1 focus:ring-[#caef45] outline-none font-['Sora'] transition-colors"
                        placeholder="<p>Write your blog content here...</p>"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                            {image ? (
                                <Image src={image} alt="Preview" fill className="object-cover" />
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <GoUpload className="w-8 h-8 mb-4 text-gray-500" />
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                            )}
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1b1d20] text-white rounded-[100px] font-bold font-['Aeonik'] hover:bg-black/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isSubmitting ? "Publishing..." : "Publish Post"}
                </button>
            </form>
        </div>
    );
};

export default BlogUploadForm;
