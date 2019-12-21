package com.service;

import android.content.Intent;
import android.os.Bundle;
import androidx.annotation.Nullable;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.facebook.react.bridge.WritableMap;

public class ServiceRequestEvent extends HeadlessJsTaskService {
    @Nullable
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();

        WritableMap data = extras != null ? Arguments.fromBundle(extras) : null;
        return new HeadlessJsTaskConfig(
            "ServiceRequest", // Use the registered headless Task here
            extras != null ? Arguments.fromBundle(extras) : null,
            5000,true);
        /*return new HeadlessJsTaskConfig(
                "ServiceRequest",
                extras != null ? Arguments.fromBundle(extras) : null,
                5000,
                true);
        */
            }
}