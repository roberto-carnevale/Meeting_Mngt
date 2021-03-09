# Meeting_Mngt
This mini-site is meant to manage meeting slots with 6 meeting points.

To use it create 3 scripts.
* Main Code (Code.gs)
* Semaphore listing (code_semaphores.gs)
* Semaphore Management (code_mng_semaphore.gs)

The code is able to manage theoretical undefined number of semaphors and meeting lists.

## Basic site configuration
Typically we will create an home page where to list semaphors.

Semaphors aims to display when the manager/trainer is open and closed the previous meeting.

Main code can also be included in the home page.

Without queries is able to open a booking slot web-app splitting the different agendas in foldable tables.

## Management pages
In the "setup" tab of the spreadsheet you can see 4 columns
1. The name of the query
1. The semaphore status (TRUE=GREEN; FALSE = RED)
1. THe wordy name of the manager/trainer
1. Active flag (FALSE=not shown; TRUE=shown)

## How to use the query
Each script, a part from semaphore listing, can be called with a query:

`https://script.google.com/macros/s/<SCRIPT_ID>/exec?`**query**

where **query** is the first column link in the Google Spreadsheet column.


## Management page
The main code is listing the agenda per the manager using the **query** method.

The Semaphore Management script is using the **query** method to show the current status and expose two buttons to manage the status.

## Libs
Using Bootstrap (4.5.2), JQuery (3.5.1) and Popper (1.16.0) 

## Examples
Here you can see an example of usage of this web-app.

In the image you can see the semaphore area at the top

In the booking area you can book a slot typing your name.

![Main Page](https://github.com/roberto-carnevale/Meeting_Mngt/blob/main/main.png)

*picture 1*

In the management page you can see the **query** effect: the agenda is shown only for the manager/trainer and the button to change to red/green the semaphor of the manager.

![Management Page](https://github.com/roberto-carnevale/Meeting_Mngt/blob/main/mngt.png)

*picture 2*

