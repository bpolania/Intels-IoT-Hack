//
//  MapViewController.h
//  Intel_Seal_Team
//
//  Created by Boris  on 3/15/15.
//  Copyright (c) 2015 LLT. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreLocation/CoreLocation.h>
#import <MapKit/MapKit.h>

@interface MapViewController : UIViewController <CLLocationManagerDelegate, MKMapViewDelegate> {
    
    CLLocationManager *locationManager;
}

@property (nonatomic, strong) IBOutlet MKMapView *mapView;

@end
