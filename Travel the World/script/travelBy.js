// CHOSING TRAVEL BY ARTICLES

$(function() {

  $('#train').click(function() {
    $(this).after($('<div class="artOnClk">').text("There's something refreshingly traditional about taking a train particularly if you're traveling over a long route. Many train travelers choose to read books, play cards or simply enjoy the scenery rushing by rather than cramming yourself into an ever-shrinking airplane seat why not relax on a train? It's one of the least stressful forms of transportation out there: someone else does the driving, you'll have more legroom than you would on an airplane and you'll be able to move around at will - not just when the captain turns the seatbelt sign off. Stare long enough at the countryside passing by your train window and you’ll probably realize this: trains transform transportation from something that is often a form of frustration during travel (plane delays, flat tires, etc) into something that is actually an enjoyable experience, not just a necessary one."));
    $(document).mouseup(function(e) {
      var container = $('.artOnClk');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  });

  // show plane article
  $('#plane').click(function() {
    $(this).after($('<div class="artOnClk travelByArtPlane">').text("If you only have a limited number of days to travel, and you truly want to spend quality time at your destination, then flying is still your best choice. If you’re flying domestically, chances are you can find a flight that will deliver you to your destination early in the day, allowing you to start your vacation as soon as you arrive.  For international travelers, flying opens up nearly an unlimited number of possibilities, allowing us to visit distant lands, experience unique destinations, and explore our planet to the fullest. Many of those places simply would not be an option for most of us without modern air travel, and if you love immersing yourself in foreign cultures, then the airplane is literally and figuratively your vehicle to the world."));
    $(document).mouseup(function(e) {
      var container = $('.artOnClk');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  });


  // show boat article
  $('#boat').click(function() {
    $(this).after($('<div class="artOnClk travelByArtBoat">').text("If you're an adventure seeker, then traveling by boat is ideal. Most boats have excellent toys on board, including snorkeling gear, kiteboards, windsurfs, paddle boards and much more. Coastlines and islands are home to some of the most beautiful cities and towns. Make stops at the marinas, discover different cultures and try tasty local dishes. One thing about being at sea that you really can't experience anywhere else is the rising and setting of the sun. View an incredible palette of colors paint the sky as the hot sun melts into the water. Anchor the boat jump off to discover the underwater wildlife as you snorkel through hidden coves. As well as at sea, you can also visit the lands and witness beautiful flora. You never know, you might stumble upon a natural mud bath or fresh water springs."));
    $(document).mouseup(function(e) {
      var container = $('.artOnClk');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  });


  // show car article
  $('#car').click(function() {
    $(this).after($('<div class="artOnClk travelByArtCar">').text("When you’re on a road trip, you have the freedom to go wherever you want and for how long you want. There’s no restrictions. A road trip is an excellent way to explore parts of your country you’ve never seen before. It’s also a great way to explore new countries and cultures. Think of all the new food, drink, landscapes, landmarks and traditions are to see and learn out there. You can visit a country you’ve always there dreamed of seeing. A road trip just wouldn’t be the same without your favourite music as its soundtrack. You and your passengers can bring their favourite songs, and you can also discover new songs by listening to the local radio. Think of how many amazing memories, pictures and souvenirs you will bring back from your epic road trip. You’ll never forget the amazing time you had on your epic road trip."));
    $(document).mouseup(function(e) {
      var container = $('.artOnClk');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  });
});

// SCROLL TO TOP OF PAGE

$('#goUp').click(function() {
  $('html, body').animate({
    scrollTop: '0px'
  }, 300);
});
