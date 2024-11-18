Feature: Dynamic Content
  As a user
  I want to verify that the dynamic content changes on each page reload
  So that I can ensure the elements are dynamically loaded

  Scenario: Verify dynamic content changes after page reload
    Given Jhon I am on the dynamic content page
    When he I capture the initial content
    And he I reload the page
    Then he I should see different content after reload
