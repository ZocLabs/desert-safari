erDiagram
    USER ||--o{ BOOKING : places
    USER ||--o{ VOUCHER_USAGE : uses
    USER ||--o{ CHAT_SESSION : initiates
    
    TOUR ||--o{ TOUR_PACKAGE : has
    TOUR_PACKAGE ||--o{ BOOKING : defines
    
    STAFF ||--o{ BOOKING_ASSIGNMENT : assigned_to
    BOOKING ||--o{ BOOKING_ASSIGNMENT : requires
    
    COUPON ||--o{ VOUCHER_USAGE : applied_in
    BOOKING ||--|| VOUCHER_USAGE : discounts

    USER {
        uuid id PK
        string clerk_id UK
        string phone_whatsapp UK
        string loyalty_tier "BRONZE/GOLD/PLATINUM"
        decimal wallet_balance
    }

    TOUR_PACKAGE {
        uuid id PK
        uuid tour_id FK
        string name "Standard/Premium/VIP"
        jsonb price_brackets "e.g. 1-4 pax, 5-10 pax"
        boolean includes_pickup
        boolean includes_bbq
    }

    BOOKING {
        uuid id PK
        string booking_reference UK "DS-2026-XXXX"
        uuid package_id FK
        enum source "WEB/IOS/ANDROID/WHATSAPP/CHATBOT"
        enum payment_status "UNPAID/PARTIAL/PAID/REFUNDED"
        decimal tax_amount
        decimal service_fee
        float pickup_latitude
        float pickup_longitude
    }

    STAFF {
        uuid id PK
        string name
        enum role "DRIVER/GUIDE/ADMIN"
        string license_expiry
        boolean is_on_duty
    }

    CHAT_SESSION {
        uuid id PK
        uuid user_id FK
        string platform "WHATSAPP/WEB_LIVE"
        jsonb transcript_summary "AI Generated"
        enum sentiment "POSITIVE/NEUTRAL/FRUSTRATED"
    }

    COUPON {
        uuid id PK
        string code UK
        enum discount_type "PERCENT/FIXED"
        decimal value
        datetime expires_at
        integer max_uses
    }