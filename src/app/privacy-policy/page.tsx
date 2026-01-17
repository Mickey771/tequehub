"use client";
import React from "react";

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="max-w-[900px] mx-auto">
                <h1 className="text-[#1b1d20] text-4xl md:text-5xl font-bold font-['Clash Display'] mb-8">
                    Privacy Policy
                </h1>
                <div className="prose prose-lg font-['Sora'] text-[#1b1d20]/80">
                    <p>
                        Effective Date: January 1, 2024
                    </p>
                    <p>
                        At Teque Hub ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>We collect information that you strictly provide to us directly:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you fill out our contact forms or sign a contract.</li>
                        <li><strong>Usage Data:</strong> We may collect anonymous data on how you interact with our website to improve user experience.</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use your information solely for legitimate business purposes:</p>
                    <ul>
                        <li>To provide and deliver our engineering services.</li>
                        <li>To process payments and manage your account.</li>
                        <li>To communicate with you regarding project updates or inquiries.</li>
                        <li>To comply with legal obligations (e.g., tax reporting).</li>
                    </ul>

                    <h3>3. Data Sharing & Security</h3>
                    <p>
                        We do <strong>not</strong> sell your personal data. We only share data with trusted third party service providers (e.g., payment processors like Stripe, cloud providers like AWS) necessary to deliver our services.
                    </p>
                    <p>
                        We implement industry standard security measures to protect your data from unauthorized access, alteration, or disclosure.
                    </p>

                    <h3>4. Your Rights (GDPR/CCPA)</h3>
                    <p>
                        Depending on your location, you have the right to access, correct, or delete your personal information.
                    </p>
                    <ul>
                        <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
                        <li><strong>Deletion:</strong> You can request that we delete your personal data, subject to legal retention requirements.</li>
                    </ul>

                    <h3>5. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at <a href="mailto:privacy@teque.tech">privacy@teque.tech</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
