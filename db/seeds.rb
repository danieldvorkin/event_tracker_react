# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

data = [
  {
    "event_type": "Symposium",
    "event_date": "2018-05-01",
    "title": "A Social-Neuroscience Perspective on Empathy",
    "speaker": "Albert von Bezold, Jules Cotard, Marian Diamond",
    "host": "Alcmaeon of Croton",
    "published": true
  },
  {
    "event_type": "Colloquium",
    "event_date": "2018-04-01",
    "title": "The Neuroscience of Restorative Justice",
    "speaker": "Albert Einstein",
    "host": "Stephen Hawking",
    "published": true
  },
  {
    "event_type": "Symposium",
    "event_date": "2018-04-01",
    "title": "Cognitive Development Theory",
    "speaker": "Francis Glisson, Ragnar Granit, Nils-Åke Hillarp",
    "host": "David H. Hubel, Herbert Jasper",
    "published": true
  },
  {
    "event_type": "Symposium",
    "event_date": "2017-05-01",
    "title": "The Neuroscience of Moral Decision Making in Ethics",
    "speaker": "Michel Jouvet, Bernard Katz, Emil Kraepelin",
    "host": "Lawrence C. Katz",
    "published": true
  },
  {
    "event_type": "Symposium",
    "event_date": "2017-05-01",
    "title": "Ovariectomy Effect on Hippocampus Spatial Memory",
    "speaker": "Rita Levi-Montalcini, John C. Lilly, Horace Winchell Magoun",
    "host": "Mondino de Luzzi, Walle Nauta",
    "published": true
  },
  {
    "event_type": "Colloquium",
    "event_date": "2017-05-01",
    "title": "Left Brain Vs Right Brain how does this impact learning",
    "speaker": "Aristides Leão",
    "host": "Louis Lapicque",
    "published": true
  }
]

data.each {|record| Event.create!(record)}
