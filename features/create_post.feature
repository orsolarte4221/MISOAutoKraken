Feature: Iniciar una conversación

@user1 @web
Scenario: Hacer Login, Crear un post, publicarlo y consultar la publicación
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 3 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I wait for 2 seconds
  And I click button "sign-in"
  And I wait for 3 seconds
  And I click button "posts"
  And I wait for 2 seconds
  And I click button "new-post"
  And I wait for 2 seconds
  And I enter text "Test Post"
  And I wait for 2 seconds
  And I send Enter
  And I click button "publish"
  And I wait for 2 seconds
  And I click button "continue"
  And I wait for 2 seconds
  And I click button "confirm-publish"
Then I see the post title is "Test Post"


@user2 @web
Scenario: Hacer Login, Crear un post, publicarlo y consultar la publicación
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 3 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I wait for 2 seconds
  And I click button "sign-in"
  And I wait for 3 seconds
  And I click button "posts"
  And I wait for 2 seconds
  And I click button "new-post"
  And I wait for 2 seconds
  And I enter text "Test Post"
  And I wait for 2 seconds
  And I send Enter
  And I click button "publish"
  And I wait for 2 seconds
  And I click button "continue"
  And I wait for 2 seconds
  And I click button "confirm-publish"
Then I see the post title is "Test Post"