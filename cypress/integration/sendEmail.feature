Feature: Send Email

Scenario Outline: Client sends email
	Given I open the Home page
	When I send the email
	    | name       | emailAddress            | details             |
	    | John Smith | tester1@standprof.co.uk | Hello, how are you? |
    Then I should see the "<ThankYouMessage>"
 Examples: 
	| Test            | ThankYouMessage             |
	| Correct Message | Thank you for your message. |
 	#| Wrong Message   | Thank you for your messag.  |