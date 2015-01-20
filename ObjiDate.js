/*
  NAME: ObjiDate.js
	DATE: 2015-01-20
	PURPOSE: This is a test of a JavaScript Function I made to validate a form based on custom attributes.
	
	NOTES:
		- The date which is passed through MUST be a datetime object. This function only parses the DateTime Object
		  and breaks the componants down into a consistent format for neater coding and display purposes.
		
	FUNCTIONS:
		- dateObject
	
	UPDATES:
		[2015-01-20 M.BENITEZMEISS] Created File & added this header comment.

*/

// CREATES AN OBJECT CONTAINING DATE INFORMATION
function dateObject(mydate)
{
	var currMonthStr 			= "January";
	// set default month string for later use 				-- STRING OUTPUT

	var currDayStr			= "Sunday";
	// set default day of the week string for later use 			-- STRING OUTPUT

	var thisDate				= new Object();
	// create new object to contain the date parts 				-- OBJECT OUTPUT

	thisDate.Hours			= mydate.getHours();
	// Current hours not formatted for double digits. 			-- NUMBER OUTPUT

	thisDate.Minutes			= mydate.getMinutes();
	// Current minutes not formatted for double digits.			-- NUMBER OUTPUT

	thisDate.Seconds			= mydate.getSeconds();
	// Current seconds not formatted for double digits. 			-- NUMBER OUTPUT

	thisDate.Year   			= mydate.getYear();
	// Current year in 4 digit format (i.e. YYYY) 				-- NUMBER OUTPUT

	thisDate.DateNum   			= mydate.getDate();
	// Day of the Month number 1-31/30/28 					-- NUMBER OUTPUT

	thisDate.MonthNum 			= mydate.getMonth()+1;
	// Month of the year number 1-12 Jan-Dec 				-- NUMBER OUTPUT

	thisDate.DayNum   			= mydate.getDay()+1;
	// Day of the week in numeric form 1-7 Sun-Sat 				-- NUMBER OUTPUT

	thisDate.HoursDbl			= (thisDate.Hours 	 < 10 ? "0" : "")+thisDate.Hours;
	// Current hours in double digit format (i.e. 01) 			-- STRING OUTPUT

	thisDate.MinutesDbl			= (thisDate.Minutes  < 10 ? "0" : "")+thisDate.Minutes;
	// Current minutes in double digit format (i.e. 01)			-- STRING OUTPUT

	thisDate.SecondsDbl			= (thisDate.Seconds  < 10 ? "0" : "")+thisDate.Seconds;
	// Current seconds in double digit format (i.e. 01) 			-- STRING OUTPUT

	// CHECK FOR MONTHS OUTSIDE OF THE 1-12 RANGE
	do
	{	// continue through parsing until months are between 1 & 12
		if(thisDate.MonthNum < 1)
		{	// if the current month is less than 1, revert date back to previous year.
			thisDate.MonthNum 	= parseInt(thisDate.MonthNum + 12);  
			thisDate.Year 	= thisDate.Year - 1;
		}
		else if(thisDate.MonthNum > 12)
		{	// if the current month is greater than 12, update date to next year.
			thisDate.MonthNum 	= parseInt(thisDate.MonthNum - 12); 
			thisDate.Year 	= thisDate.Year + 1;
		}
	} while(thisDate.MonthNum < 1 && thisDate.MonthNum > 12);

	thisDate.MonthNumDbl		= (thisDate.MonthNum < 10 ? "0" : "")+thisDate.MonthNum;
	// Current month in double digit format (i.e. 01) 				-- STRING OUTPUT

	thisDate.DateNumDbl			= (thisDate.DateNum  < 10 ? "0" : "")+thisDate.DateNum;
	// Current day in double digit format (i.e. 01)					-- STRING OUTPUT

	// FORMATTING FOR THE MONTH NAME AND THE DAY OF THE WEEK NAME 		-- STRING OUTPUT
	// if/else if statement to set the Current Month Name.
	if(thisDate.MonthNum 	==  2){currMonthStr = "February";}							
	else if(thisDate.MonthNum 	==  3){currMonthStr = "March";}
	else if(thisDate.MonthNum 	==  4){currMonthStr = "April";}
	else if(thisDate.MonthNum 	==  5){currMonthStr = "May";}
	else if(thisDate.MonthNum 	==  6){currMonthStr = "June";}
	else if(thisDate.MonthNum 	==  7){currMonthStr = "July";}
	else if(thisDate.MonthNum 	==  8){currMonthStr = "August";}
	else if(thisDate.MonthNum 	==  9){currMonthStr = "September";}
	else if(thisDate.MonthNum 	== 10){currMonthStr	= "October";}
	else if(thisDate.MonthNum 	== 11){currMonthStr = "November";}
	else if(thisDate.MonthNum 	== 12){currMonthStr = "December";}

	// if/else if statement to set the Current day of the week Name		-- STRING OUTPUT
	if(thisDate.DayNum 		== 2){currDayStr 	= "Monday";}								
	else if(thisDate.DayNum 	== 3){currDayStr 	= "Tuesday";}
	else if(thisDate.DayNum 	== 4){currDayStr 	= "Wednesday";}
	else if(thisDate.DayNum 	== 5){currDayStr 	= "Thursday";}
	else if(thisDate.DayNum 	== 6){currDayStr 	= "Friday";}
	else if(thisDate.DayNum 	== 7){currDayStr 	= "Saturday";}

	thisDate.DayStr			= currDayStr;
	// Current Name of the Day of the week (i.e. Monday)				-- STRING OUTPUT
	thisDate.MonthStr			= currMonthStr;
	// Current Name of the Month (i.e. July) 					-- STRING OUTPUT

	return thisDate;
}

