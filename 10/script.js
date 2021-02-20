/*               const second = () => {
                  setTimeout(() => {
                      console.log('Async Hey there');
                  }, 2000);
              };

              const first = () => {
                  console.log('Hey there');
                  second();
                  console.log('The end');
              };

              first();

              function getRecipe() {
                  setTimeout(() => {
                      const recpieId = [345, 234, 567, 945];
                      console.log(recpieId);

                      setTimeout((id) => {
                          const recipe = {
                              title: 'Fresh tomato pasta',
                              publisher: 'Jonas'
                          };
                          console.log(`${id}: ${recipe.title}`);

                          setTimeout((publisher) => {
                              const recipe2 = {
                                  title: 'Italian pizza',
                                  publisher: 'Jonas'
                              };
                              console.log(recipe2);
                          }, 1500, recipe.publisher);

                      }, 1500, recpieId[2]);
                  }, 1500);
              }
              getRecipe(); */

/* const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([345, 234, 567, 945]);
    }, 1500);
});

const getRecipe = (recipeId) => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            resolve(`${id}: ${recipe.title}`);
        }, 1500, recipeId);
    });
};

const getRelated = (publisher) => {
    return new Promise((resolve, reject) => {
        setTimeout((pub) => {
            const recipe = {
                title: 'Italian pizza',
                publisher: 'Jonas'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
}; */

/* getIds
    .then((ids) => {
        console.log(ids);
        return getRecipe(ids[2]);
    })
    .then((recipe) => {
        console.log(recipe);
        return getRelated('Jonas');
    })
    .then((recipe) => {
        console.log(recipe);
    })
    .catch((error) => {
        console.log('Error!!');
    }); */

/* async function getRecipesAW() {
    const ids = await getIds;
    console.log(ids);
    const recipe = await getRecipe(ids[2]);
    console.log(recipe);
    const relatedRecipe = await getRelated('Jonas');
    console.log(relatedRecipe);

    return recipe;
}
getRecipesAW()
.then((recipe) => {
    console.log(`${recipe} is the best ever`);
}); */

function getExampleData(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((result) => {
            console.log(result);
            return result.json();
        })
        .then((data) => {
            //console.log(data);
            const title = data.title;
            console.log(title);
        })
        .catch((error) => {
            console.log(error);
        });
}

/* getExampleData(4);
getExampleData(5); */

async function getExampleDataAW(postId) {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await result.json();
        const title = data.title;
        //console.log(title);
        return data;
    } catch (error) {
        console.log(error);
    }
}

let title;
getExampleDataAW(1)
    .then((data) => {
        title = data.title;
        console.log(title);
    });

getExampleDataAW(5);