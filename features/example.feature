Feature: Playwright website navigation
  As a user
  I want to open the Playwright site and navigate to the installation section

  Scenario: Open Playwright and go to Get started
    Given I open the Playwright website
    When I click the Get started link
    Then the Installation heading is displayed
