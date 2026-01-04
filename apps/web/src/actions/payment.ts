"use server";

import { redirect } from "next/navigation";

// Types for Fatora
interface FatoraPaymentRequest {
    amount: number;
    currency: "QAR";
    orderId: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    successUrl: string;
    failureUrl: string;
}

interface FatoraPaymentResponse {
    isSuccess: boolean;
    result?: {
        checkout_url: string;
        transaction_id: string;
    };
    error?: string;
}

export async function processPayment(
    data: FatoraPaymentRequest
): Promise<FatoraPaymentResponse> {
    // 1. Validation
    if (!data.amount || !data.orderId) {
        return { isSuccess: false, error: "Invalid payment data" };
    }

    // 2. Fatora API Integration
    try {
        const FATORA_API_KEY = process.env.FATORA_API_KEY;
        const FATORA_BASE_URL = process.env.FATORA_BASE_URL || "https://staging.fatora.io/api/v1";

        const payload = {
            amount: data.amount,
            currency: data.currency,
            order_id: data.orderId,
            client: {
                name: data.customerName,
                phone: data.customerPhone,
                email: data.customerEmail
            },
            success_url: data.successUrl,
            failure_url: data.failureUrl,
            save_token: false
        };

        // In a real scenario, uncomment the fetch
        // const res = await fetch(`${FATORA_BASE_URL}/payments/checkout`, {
        //    method: "POST",
        //    headers: {
        //       "Content-Type": "application/json",
        //       "api_key": FATORA_API_KEY!
        //    },
        //    body: JSON.stringify(payload)
        // });
        // const json = await res.json();

        // MOCK RESPONSE for Demo
        const mockResponse = {
            isSuccess: true,
            result: {
                checkout_url: `https://fatora.io/checkout/mock/${data.orderId}`,
                transaction_id: `txn_${Date.now()}`
            }
        };

        if (!mockResponse.isSuccess) {
            return { isSuccess: false, error: "Payment gateway error" };
        }

        return mockResponse;

    } catch (error) {
        console.error("Fatora Payment Error:", error);
        return { isSuccess: false, error: "Internal payment error" };
    }
}
