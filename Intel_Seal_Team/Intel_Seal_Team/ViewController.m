//
//  ViewController.m
//  Intel_Seal_Team
//
//  Created by Boris  on 3/15/15.
//  Copyright (c) 2015 LLT. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

@synthesize webview;

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString *urlText = @"http://192.168.0.102:8081";
    
    [self.webview loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:urlText]]];
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
