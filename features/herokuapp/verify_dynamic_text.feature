Feature: Verify dynamic text with random ID

  Scenario: Verify the text matches expected text using a text-based selector
    Given Jhon navigates to the dynamic properties page
    Then he should see the text "This text has random Id" equals the expected text

  Scenario: Verify the text matches expected text using a dynamic ID-based selector
    Given Jhon navigates to the dynamic properties page
    Then he should see the text "This text has random Id" equals the expected text by locating element with dynamic ID
