"use client";
import React from "react";
import Accordion from "@/components/Common/Accordion";

const FAQPage = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="text-[#1b1d20] text-4xl md:text-5xl font-bold font-['Clash Display'] mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[#1b1d20]/70 font-['Sora'] max-w-[600px]">
                        Find answers to common questions about our services, processes, and engagement models.
                    </p>
                </div>

                <div className="max-w-[900px] mx-auto flex flex-col gap-12">

                    {/* Section 1: General & Operations */}
                    <div>
                        <h2 className="text-2xl font-bold font-['Clash Display'] mb-6">General & Operations</h2>
                        <Accordion title="Where is Teque Hub located?">
                            <p>
                                Teque Hub is a US incorporated technology company (Delaware C Corporation). We operate as a distributed engineering firm with a global footprint, allowing us to serve clients across North America (US/Canada), the UK, and the Middle East (UAE/Saudi Arabia). This structure ensures full US legal protection for our clients while accessing top tier technical talent globally.
                            </p>
                        </Accordion>
                        <Accordion title="What time zones do you support?">
                            <p>We are built for global coverage. Our engineering teams operate in overlapping shifts to ensure real time collaboration regardless of your location:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>North America:</strong> We align with Eastern & Pacific Time (EST/PST) for meetings and deployments.</li>
                                <li><strong>UK & Europe:</strong> Full overlap with Greenwich Mean Time (GMT/BST).</li>
                                <li><strong>Middle East:</strong> We support Gulf Standard Time (GST) for our clients in Dubai, Abu Dhabi, and Riyadh.</li>
                            </ul>
                        </Accordion>
                        <Accordion title="Do you have a physical office I can visit?">
                            <p>
                                We are a "Remote First" engineering pod. While our legal headquarters is in Wilmington, Delaware, our engineers work distributively. This keeps our overhead low and allows us to invest 100% of your budget into code quality rather than expensive office leases.
                            </p>
                        </Accordion>
                    </div>

                    {/* Section 2: Business, Legal & Payments */}
                    <div>
                        <h2 className="text-2xl font-bold font-['Clash Display'] mb-6">Business, Legal & Payments</h2>
                        <Accordion title="Who owns the code and Intellectual Property (IP)?">
                            <p>
                                You do. We operate under strict US Work for Hire laws. Once your project is delivered and the final invoice is paid, 100% of the Intellectual Property (IP), source code, and assets are legally transferred from Teque Hub Corp to your company. There is zero ambiguity—you own your product.
                            </p>
                        </Accordion>
                        <Accordion title="Can I pay in my local currency?">
                            <p>Yes. As a global C Corp, we aim to make billing seamless.</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>US/Canada:</strong> We accept USD/CAD via ACH, Wire, or Stripe.</li>
                                <li><strong>UK:</strong> We accept GBP via local bank transfer.</li>
                                <li><strong>UAE/Middle East:</strong> We facilitate international transfers compatible with UAE and Saudi banking regulations.</li>
                            </ul>
                        </Accordion>
                        <Accordion title="How do you handle data privacy (GDPR/CCPA)?">
                            <p>
                                Security is part of our architecture, not an afterthought. Whether you serve customers in California (CCPA), the UK (GDPR), or the UAE, we design our database schemas and automation workflows to strictly adhere to your region's data residency and privacy laws.
                            </p>
                        </Accordion>
                    </div>

                    {/* Section 3: Technical Expertise & Process */}
                    <div>
                        <h2 className="text-2xl font-bold font-['Clash Display'] mb-6">Technical Expertise & Process</h2>
                        <Accordion title="What is your primary tech stack?">
                            <p>We are specialists, not generalists. We focus on two pillars:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Cross Platform Mobile:</strong> We build high performance native apps using Flutter, allowing you to launch on iOS and Android simultaneously from a single codebase.</li>
                                <li><strong>Workflow Automation:</strong> We architect complex business logic using n8n, connecting your disparate tools (CRM, ERP, AI) into a unified, automated system.</li>
                            </ul>
                        </Accordion>
                        <Accordion title="How do we communicate during a project?">
                            <p>
                                We integrate directly into your existing workflow. We use Slack/Microsoft Teams for daily communication, Jira/Linear for task management, and GitHub/GitLab for code reviews. You won't feel like you are outsourcing; you will feel like you have added a dedicated technical team member.
                            </p>
                        </Accordion>
                        <Accordion title="Do you use AI to write code?">
                            <p>
                                We use AI tools (like GitHub Copilot) to accelerate development, but every line of code is reviewed and refactored by senior human engineers. We never deploy unchecked AI generated code. This ensures your software is secure, efficient, and free of "hallucinations."
                            </p>
                        </Accordion>
                    </div>

                    {/* Section 4: Engagement Models */}
                    <div>
                        <h2 className="text-2xl font-bold font-['Clash Display'] mb-6">Engagement Models</h2>
                        <Accordion title="Do you charge hourly or per project?">
                            <p>We offer two flexible models depending on your needs:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Project Based (Fixed Price):</strong> Ideal for MVPs or specific automation setups. We provide a clear scope, timeline, and fixed cost upfront.</li>
                                <li><strong>Dedicated Pod (Retainer):</strong> Best for long term growth. You get a dedicated developer (or team) for a flat monthly fee, working solely on your backlog as your fractional engineering department.</li>
                            </ul>
                        </Accordion>
                        <Accordion title="What happens if I find a bug after launch?">
                            <p>
                                We stand by our engineering. All fixed price projects come with a 90 day Warranty Period where we fix any bugs or issues related to our code at no extra cost. For long term peace of mind, we offer optional maintenance packages.
                            </p>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQPage;
