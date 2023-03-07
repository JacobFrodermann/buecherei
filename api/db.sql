-- ------------------------------
-- OPTION
-- ------------------------------

OPTION IMPORT;

-- ------------------------------
-- TABLE: books
-- ------------------------------

DEFINE TABLE books SCHEMALESS PERMISSIONS NONE;

-- ------------------------------
-- TABLE: person
-- ------------------------------

DEFINE TABLE person SCHEMALESS PERMISSIONS NONE;

-- ------------------------------
-- TABLE: types
-- ------------------------------

DEFINE TABLE types SCHEMALESS PERMISSIONS NONE;

-- ------------------------------
-- TRANSACTION
-- ------------------------------

BEGIN TRANSACTION;

-- ------------------------------
-- TABLE DATA: books
-- ------------------------------

UPDATE books:0 CONTENT { author: "Konrad Duden", cover: "http://138.2.151.188/covers/G%c3%bcnther-K%c3%b6ster-Drosdowski+Duden-1-Die-deutsche-Rechtschreibung-Die-neuen-Regeln-Die-neuen.jpg", id: books:0, title: "DUDEN 1 Die deutsche Rechtschreibung", types: [types:⟨non-fiction⟩] };
UPDATE books:1 CONTENT { author: "Trank Schwieger", cover: "http://138.2.151.188/covers/51XgX87ipbL._SX360_BO1,204,203,200_.jpg", id: books:1, isbn: 978342376289, title: "Ich, Merlin und die furchtlose Ritter", types: [types:children, types:⟨non-fiction⟩] };
UPDATE books:2 CONTENT { author: "Trank Schwieger", cover: "http://138.2.151.188/covers/51cEZuHK5dL._SX358_BO1,204,203,200_.jpg", id: books:2, isbn: 9783423762007, title: "Ich, Caesar und die Bande vom Kapitol", types: [types:children, types:⟨non-fiction⟩] };
UPDATE books:3 CONTENT { author: "Tonke Dragt", cover: "http://138.2.151.188/covers/81jHu8JH7hL.jpg", id: books:3, isbn: 9783407780560, title: "Der Wilde Wald", types: [types:fantasy, types:roman] };
UPDATE books:4 CONTENT { author: "Kevin Brooks", cover: "http://138.2.151.188/covers/iboy-taschenbuch-kevin-brooks.webp", id: books:4, isbn: 9783423715386, title: "i Boy", types: [types:fantasy, types:roman, types:crime, types:thriller] };
UPDATE books:5 CONTENT { author: "Anthony Horowirtz", cover: "http://138.2.151.188/covers/51rRqznC2SL.jpg", id: books:5, isbn: 9783473585229, title: "Alex Rider Stormbreaker", types: [types:crime, types:roman, types:thriller] };
UPDATE books:6 CONTENT { author: "Anthony Horowirtz", cover: "http://138.2.151.188/covers/61it-mG+qUL.jpg", id: books:6, isbn: 978347358267, title: "Alex Rider Scorpia", types: [types:crime, types:roman, types:thriller] };
UPDATE books:7 CONTENT { author: "Grit Poppe", cover: "http://138.2.151.188/covers/9783751300797.jpg", id: books:7, isbn: 9783791501642, title: "VERATEN", types: [types:⟨non-fiction⟩, types:thriller] };
UPDATE books:13wochen CONTENT { author: "Harry Voß", cover: "http://138.2.151.188/covers/71uOuxwAYZL.jpg", id: books:13wochen, isbn: 9783417286571, title: "13 Wochen", types: [types:crime, types:roman, types:thriller] };
UPDATE books:LTB20 CONTENT { author: "Walt Disney", cover: "http://138.2.151.188/covers/ltb_20.png", id: books:LTB20, title: "Der Hanhn aus Mexico", types: [types:comic, types:children] };
UPDATE books:LTB200 CONTENT { author: "Walt Disney", cover: "http://138.2.151.188/covers/250px-Cover_LTB_200.jpeg", id: books:LTB200, isbn: 5701418032892, title: "Lustiges Taschenbuch Nr.200", types: [types:comic, types:children] };
UPDATE books:LTB475 CONTENT { author: "Walt Disney", cover: "http://138.2.151.188/covers/475.png", id: books:LTB475, isbn: 3774368368, title: "Gefährliche Galaxien", types: [types:comic, types:children] };
UPDATE books:LTB493 CONTENT { author: "Walt Disney", cover: "http://138.2.151.188/covers/ltb_493.jpg", id: books:LTB493, isbn: 3841393438, title: "Vereinte Kräfte", types: [types:comic, types:children] };
UPDATE books:h CONTENT { author: "Frank Schwieger", cover: "http://138.2.151.188/covers/Ich%20Zeus%20und%20die%20Bande%20vom%20Olymp.png", id: books:h, isbn: 9783423761758, title: "Ich, Zeus und die Bande vom Olymp", types: [types:⟨non-fiction⟩, types:children] };

-- ------------------------------
-- TABLE DATA: person
-- ------------------------------

UPDATE person:jaime CONTENT { id: person:jaime, marketing: true };
UPDATE person:nlenkampxyvro9l7u155 CONTENT { id: person:nlenkampxyvro9l7u155, identifier: "guo8r7vq8h", marketing: true, name: { first: "Tobie", last: "Morgan Hitchcock" }, title: "Founder & CEO" };

-- ------------------------------
-- TABLE DATA: types
-- ------------------------------

UPDATE types:children CONTENT { id: types:children, name: "für Kinder" };
UPDATE types:comic CONTENT { id: types:comic, name: "Comics", test: 0 };
UPDATE types:crime CONTENT { id: types:crime, name: "Krimi" };
UPDATE types:fantasy CONTENT { id: types:fantasy, name: "Fantasy" };
UPDATE types:⟨non-fiction⟩ CONTENT { id: types:⟨non-fiction⟩, name: "Sachücher" };
UPDATE types:roman CONTENT { id: types:roman, name: "Romane" };
UPDATE types:thriller CONTENT { id: types:thriller, name: "Thriller" };

-- ------------------------------
-- TRANSACTION
-- ------------------------------

COMMIT TRANSACTION;

