import React from "react";
import BlogUploadForm from "@/components/Admin/BlogUploadForm";

const AdminBlogUploadPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-[1300px] mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-[#1b1d20] text-4xl font-bold font-['Clash Display']">Admin Dashboard</h1>
                    <p className="text-gray-500 mt-2 font-['Sora']">Manage your blog content</p>
                </div>
                <BlogUploadForm />
            </div>
        </div>
    );
};

export default AdminBlogUploadPage;
