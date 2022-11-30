package com.payten.hakaton;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PrintService extends ReactContextBaseJavaModule {
    public static String result = null;
    public static boolean waiting = false;

    PrintService(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "PrintService";
    }

    @ReactMethod
    public void print(@NonNull String text, @NonNull Promise promise) {
        String[] lines = text.split("\n");
        String data = "";
        for(String s : lines){
            data+="{\"type\": \"text\",\"style\":\"CONDENSED\",\"content\": \""+s+"\"},";
        }
        data = data.substring(0, data.length()-1);
        String json = "{\"header\": {\"length\": 64984,\"hash\":\"9397e30d8f92da29d9c1016a3e0eab55c7874f5b1cc67e400ecfac233f82889234f41328b2df08066b3e692dcb6f028d56b0fd009fca18fdac9b5669f6775e71\",\"version\": \"1\"},\"request\": {\"command\": {\"printer\": {\"type\": \"JSON\",\"printLines\": ["+data+"]}}}}";
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
