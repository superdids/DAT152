package no.hib.dat152.resource;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

public class MyApplication extends ResourceConfig {  
    public MyApplication() {
        register(JacksonFeature.class);
        packages("no.hib.dat152");
    }
}