package com.payten.hakaton;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class MyReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Intent i = new Intent(context, MainActivity.class);
        if(PaymentHandler.waiting){
            PaymentHandler.waiting = false;
            PaymentHandler.result = intent.getStringExtra("ResponseResult");
        }
        if(PrintService.waiting){
            PrintService.waiting = false;
            PrintService.result = intent.getStringExtra("ResponseResult");
        }
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        i.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
        context.startActivity(i);
    }
}
