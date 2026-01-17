"use client";
import React from "react";

const RefundPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="max-w-[900px] mx-auto">
                <h1 className="text-[#1b1d20] text-4xl md:text-5xl font-bold font-['Clash Display'] mb-8">
                    Refund Policy
                </h1>
                <div className="prose prose-lg font-['Sora'] text-[#1b1d20]/80">
                    <p>
                        Thank you for choosing Teque Hub. We are committed to ensuring clarity and fairness in all our engagements. This Refund Policy outlines the terms under which refunds may be issued for our services.
                    </p>

                    <h3>1. Project Based Engagements</h3>
                    <p>
                        For fixed price projects, our payment structure is milestone based. Refunds are processed as follows:
                    </p>
                    <ul>
                        <li><strong>Upfront Deposits:</strong> Deposits are non refundable once the project kickoff has occurred and resources have been allocated.</li>
                        <li><strong>Milestone Payments:</strong> Payments made upon the completion of a specific milestone are non refundable once the milestone has been approved by the client.</li>
                        <li><strong>Termination:</strong> If a project is terminated early by the client, payment is due for all work completed up to the date of termination. Any unearned portion of a prepaid amount will be refunded.</li>
                    </ul>

                    <h3>2. Retainer & Dedicated Pods</h3>
                    <p>
                        Services provided under a monthly retainer or dedicated pod model are billed in advance.
                    </p>
                    <ul>
                        <li><strong>Monthly Fees:</strong> Monthly fees are non refundable once the month has commenced.</li>
                        <li><strong>Cancellation:</strong> You may cancel your retainer with 30 days' notice. No full or partial refunds will be issued for the current billing cycle.</li>
                    </ul>

                    <h3>3. Warranty Period</h3>
                    <p>
                        We offer a 90 day warranty period for all fixed price projects. During this time, we will fix any bugs or issues related to our original code at no cost. This warranty does not cover issues caused by third party updates, client modifications, or new feature requests.
                    </p>

                    <h3>4. Contact Us</h3>
                    <p>
                        If you believe you are entitled to a refund based on specific circumstances not covered here, please contact us at <a href="mailto:billing@teque.tech">billing@teque.tech</a>. We review all requests on a case by case basis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicyPage;
