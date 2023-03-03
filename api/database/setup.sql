DROP TABLE IF EXISTS superhero;

CREATE TABLE superhero (
    superhero_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(30) UNIQUE NOT NULL,
    description VARCHAR(500),
    intelligence INT NOT NULL DEFAULT 0,
    strength INT NOT NULL DEFAULT 0,
    speed INT NOT NULL DEFAULT 0,
    durability INT NOT NULL DEFAULT 0,
    power INT NOT NULL DEFAULT 0,
    combat INT NOT NULL DEFAULT 0,
    votes INT DEFAULT 0
);

INSERT INTO superhero
    (name, description, intelligence, strength, speed, durability, power, combat, votes)
VALUES ('Superman', 'The last son of Krypton and protector of Metropolis', 9, 10, 9, 9, 10, 8, 0),
       ('Spider-Man', 'A high school student who gained spider-like abilities after being bitten by a radioactive spider', 8, 5, 7, 7, 5, 9, 0),
       ('Wonder Woman', 'A warrior princess from the Amazonian tribe of Themyscira who fights for justice', 7, 8, 7, 10, 8, 9, 0),
       ('Iron Man', 'A billionaire inventor and genius engineer who built a powerful suit of armor to fight crime', 10, 7, 6, 8, 8, 9, 0),
       ('Batman', 'A billionaire playboy and master detective who fights crime as a masked vigilante in Gotham City', 9, 6, 7, 7, 6, 10, 0),
       ('Captain America', 'A World War II veteran who was given a super-soldier serum that made him a living legend', 7, 5, 5, 6, 3, 9, 0),
       ('The Flash', 'A forensic scientist who gained superhuman speed after being struck by lightning', 6, 3, 10, 3, 5, 9, 0),
       ('Black Panther', 'The king of Wakanda who possesses enhanced strength, agility, and senses', 7, 6, 6, 6, 5, 9, 0),
       ('Green Lantern', 'A member of the Green Lantern Corps who wields a power ring that can create anything the wearer can imagine', 8, 5, 6, 6, 10, 8, 0),
       ('Thor', 'The god of thunder and prince of Asgard who wields a mighty hammer called Mjolnir', 6, 9, 5, 8, 10, 7, 0);