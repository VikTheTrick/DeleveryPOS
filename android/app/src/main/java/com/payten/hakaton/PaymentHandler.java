package com.payten.hakaton;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.Intent;

import androidx.annotation.NonNull;

public class PaymentHandler extends ReactContextBaseJavaModule {
    public static String result = null;
    public static boolean waiting = false;

    PaymentHandler(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "PaymentHandler";
    }

    @ReactMethod
    public void sendPaymentRequest(@NonNull float price, @NonNull Promise promise) {
        String cena = new Integer((int) (100 * price)).toString();
        String json = "{\"header\":{\"length\":\"259\",\"hash\":\"XXX\",\"version\":\"01\"},\"request\":{\"financial\":{\"transaction\":\"sale\",\"id\": {\"XXXecr\": \"000008\",\"XXXacquirer\": \"AQ2\",\"XXXcardName\": \"kukuruz|B1|kokice\"},\"amounts\": {\"base\": \"" + cena + "\",\"currencyCode\": \"RSD\"},\"options\":{\"language\": \"sr\",\"print\": \"true\"}}}}";
        Intent intent = new Intent("com.payten.ecr.action");
        intent.setPackage("com.payten.paytenapos");
        intent.putExtra("ecrJson", json);
        intent.putExtra("senderPackage", this.getReactApplicationContext().getPackageName());
        waiting = true;
        this.getReactApplicationContext().sendBroadcast(intent);
        while (result==null) {
            try {
                Thread.sleep(100);
            } catch (Exception ex) {

            }
        }
        promise.resolve(result);
        result = null;
    }
}