import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Constants {
	dashbaordChartDateFormat: string;
	EncryptKey: string;
	IV: string;
	APIBasePath: string;
	APIBasePathIdentity: string;
	APITypeApplication: string;
	APITypeIdentity: string;
	ValidationMessageKeys: Object;
	defaultLanguageId: number;
	notificationTimeout: number;
	commonAPIErrorMessage: string;
	validationMessages: any;
	APIRequestTimeout: number;
	unauthorizedAccessPage: string;
	windowDimensionParams: Object;
	mapDefaultLat: number;
	mapDefaultLon: number;
	mapZoomLevel: number;
	toolTipLength: any;
	defaultExtent: any[];
	gisDateFormat: string;
	loginURL: string;
	countryCode: string;
	GridPageSize: number;
	defaultLanguage: string;
	otpValidityPeriodInMin: number;
	dateConversionFormatForDatePicker: string;
	appClientToken: string;
	pageStepper: any[];
	timePickerFormat: string;
	firebaseDatabaseUrl: string;
	timePickerFormat_tt: string;
	gidColumnHeaderHeight: number;
	TimePickerInterval: number;
	momentTimeFormat12H: string;
	momentTimeFormat24H: string;
	momentDateTimeFormat24H: string;
	momentDateFormat: string;
	// driverStatus: any;
	// vehicleStatus: any;
	durationLimit: number;
	monthFormat: any;
	defaultMomentDateFormat: string;
	/**
	 * The number of days for the trip allocation possible
	 */
	allocationLimit: number;
	/**
	 * The license key for the FullCalendar library
	 */
	FullCalendarLicenseKey: string;

	constructor() {
		this.EncryptKey = '##Vanp@@l~CGC~2017##';
		this.IV = 'vanp@@lCGC';
		this.APIBasePath = 'localhost/';
		this.APITypeApplication = 'APPLICATION';
		this.APITypeIdentity = 'IDENTITY';
		this.ValidationMessageKeys = {
			'required': 'Page.Labels.REQUIRED',
			'invalidEmail': 'Invalid email address',
			'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
			'minlength': 'Minimum length',
			'passwordMismatch': 'Passwords do not match',
		};
		this.defaultLanguageId = 1;
		this.notificationTimeout = 5000;
		this.commonAPIErrorMessage = 'Server Error';
		this.APIRequestTimeout = 25000000;
		this.unauthorizedAccessPage = '/unauthorized-access';
		this.mapDefaultLat = 29.34387539941801;
		this.mapDefaultLon = 47.977294921875;
		this.mapZoomLevel = 8;
		this.toolTipLength = 15;
		this.defaultExtent = [8, 44.5, 19, 50];
		this.countryCode = '+965';
		this.GridPageSize = 10;
		this.defaultLanguage = 'en';
		this.otpValidityPeriodInMin = 1;
		this.durationLimit = 5;
		this.dateConversionFormatForDatePicker = 'YYYY-MM-DD HH:mm:ss';
		this.appClientToken = 'c63a694fe3dd9df471152b5c3e0721a5';
		this.pageStepper = [
			{ id: 5, name: "5" },
			{ id: 10, name: "10" },
			{ id: 15, name: "15" },
			{ id: 25, name: "25" },
			{ id: 50, name: "50" },
			{ id: 100, name: "100" }
		];
		this.toolTipLength = 15;
		this.dashbaordChartDateFormat = 'DD-MMM-YYYY';
		this.timePickerFormat = 'hh:mm tt';
		this.timePickerFormat_tt = 'HH:mm';
		this.firebaseDatabaseUrl = 'https://vanpoolingdriverapp.firebaseio.com';
		this.allocationLimit = 7;
		this.gidColumnHeaderHeight = 50;
		this.TimePickerInterval = 15;
		this.momentTimeFormat12H = 'hh:mm a';
		this.momentTimeFormat24H = 'HH:mm';
		this.momentDateFormat = 'DD/MMM/YYYY';
		this.momentDateTimeFormat24H = 'DD/MMM/YYYY HH:mm';
		this.FullCalendarLicenseKey = '0332016959-fcs-1500027348';		
		this.momentTimeFormat12H = 'hh:mm A';
		this.momentTimeFormat24H = 'HH:mm';
		this.momentDateFormat = 'DD/MMM/YYYY';
		this.momentDateTimeFormat24H = 'DD/MMM/YYYY HH:mm';
		this.FullCalendarLicenseKey = '0332016959-fcs-1500027348';
		this.monthFormat = 'MMM yyyy';
		this.defaultMomentDateFormat = 'DD/MMM/YYYY';
	}
}
export enum DriverStatus {
	UnAllocated = 3,
	Allocated = 1,
	Absent = 2
}
export enum VehicleStatus {
	Allocated = 1,
	Available = 2,
	Completed = 3,
	Maintenance = 4
}

export enum AccessType {
	None = 0,
	ReadOnly = 1,
	ReadWrite = 2
}

export enum AccessPrivileges {
	Access = 1,
	NoAccess = 0
}

export enum FuelType {
	Petrol = 1,
	Diesel = 2
}

export enum ServiceStatus {
	InService = 0,
	NotInService = 1,
}

export enum NotificationStatus {
	UnRead = 1,
	Read = 2,
	Delete = 3
}
export enum OwnershipType {
	Owned = 1,
	Leased = 2,
	Rented = 3
}

export enum VehicleStatuses {
	ActivationPending = 1,
	Active = 2,
	UnderMaintenance = 3,
	Inactive = 4
}

export enum EmploymentType {
	Contract = 1,
	Driver = 2,
	Manager = 3,
	Finance = 4,
	DailyContract = 5
}

export enum EmployeeStatus {
	Joined = 1
}

export enum JourneyType {
	OneWay = 1,
	Round = 2,
	SplitShift = 3
}

export enum MaintenanceStatuses {
	Pending = 1,
	Ongoing = 2,
	Delayed = 3,
	Completed = 4
}

export enum MaintenanceActivityTypes {
	Planned = 1,
	Unplanned = 2
}

export enum GroupingIntervals {
	Daily = 1,
	Monthly = 2
}

export enum TripTypes {
	FirstShiftOnward = 1,  // 'firstShiftOnward'
	FirstShiftReturn = 2, // 'firstShiftReturn'
	SecondShiftOnward = 3, // 'secondShiftOnward'
	SecondShiftReturn = 4, // 'secondShiftReturn'
}

export enum SubscriptionTypes {
	Weekly = 1,
	Monthly = 2,
	Quarterly = 3
}

export enum SubscriptionStatuses {
	Reserved = 1,
	Active = 2,
	Removed = 3,
	SubscriptionUnpaid = 4,
	Expired = 5,
	Cancelled = 6
}
export enum operationType {
	poolRide = 1,
	scheduledRide = 2,
	dailyRental = 3,
	all = 4
}
export enum ReportType {
	ProposedPool = 1,
	PoolSearches = 2
}
