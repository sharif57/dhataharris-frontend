'use client';
import { useGetTermsAndConditionsQuery } from "@/redux/feature/settingSlice"

export default function PrivacyPolicyPage() {
    const { data } = useGetTermsAndConditionsQuery(undefined)
    console.log(data)
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

            <section className="mb-8">
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: data?.description }}>

                </p>
            </section>


        </div>
    )
}
