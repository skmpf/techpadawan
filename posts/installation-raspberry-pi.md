---
title: "Installer un Raspberry Pi"
date: "2021-12-07"
spoiler: "Configure ton Raspberry Pi pour faire tourner les projets que tu veux dessus."
---

## Introduction

Mars 2020, je viens de terminer une formation de type bootcamp en développement web et, comme Neo dans le film Matrix je commence à voir la pluie de code vert partout. Le monde des possibles me semble infini.

Mais mars 2020 c'est aussi la crise sanitaire du COVID-19, le premier confinement, le télétravail et les plateformes de streaming qui commencent à réduire leur bande passante.

![Macron - Nous sommes en guerre](https://res.cloudinary.com/dzzyt6yhh/image/upload/v1639018813/techpadawan/Screen_Shot_2021-11-21_at_17.32.44_rl8wg9.png)

Je me rends compte que je ne veux plus dépendre de ces plateformes pour pouvoir regarder mes films et séries favoris. J'ai déjà des disques durs remplis contenu numérisé au cours des années (qui a encore un lecteur CD/DVD ?), je n'ai pas les moyens de m'acheter un NAS à plus de 300€ donc je décide de construire mon propre serveur media avec un Raspberry Pi.

Le Raspberry Pi est l'appareil le plus adéquat pour mon projet car il est peu cher, il consomme peu, ce qui est important pour un appareil connecté 24/7, et il ne prend pas de place ce qui est pratique pour le glisser sous le meuble TV ou dans un tirroir.

Dans cet article je vais donc te montrer comment :

### Équipement nécessaire :

- [Raspberry Pi 4](https://www.amazon.fr/Raspberry-Mod%C3%A8le-ARM-Cortex-A72-WLAN-AC-Bluetooth/dp/B07TC2BK1X/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=raspberry+pi+4&qid=1637510020&sr=8-10&_encoding=UTF8&=techpadawan-21&=ur2&=22c2d2a2946f827908feae594e106dd0&=1642&=6746)
- [carte micro SD](https://www.amazon.fr/SanDisk-M%C3%A9moire-microSDHC-Adaptateur-homologu%C3%A9e/dp/B08GY9NYRM/ref=sr_1_5?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3SRKEBQFFUABJ&keywords=micro%252Bsd%252B32go&qid=1637509456&sprefix=micro%252Bsd%252Caps%252C1491&sr=8-5&th=1&_encoding=UTF8&=techpadawan-21&=ur2&=4c6ab5fd90321156e8fb14a1c9086368&=1642&=6746) (8 Go minimum mais préfère au moins 32 Go pour ne pas te retrouver limité trop vite)
- [lecteur de carte micro SD](https://www.amazon.fr/Vanja-Adaptateur-Connecteur-Notebooks-Smartphones/dp/B00W02VHM6/ref=sr_1_5?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lecteur%252Bde%252Bcarte%252Bmicro%252Bsd&qid=1637509748&sr=8-5&th=1&_encoding=UTF8&=techpadawan-21&=ur2&=9c6d5b0a7736aeccf19cea5f96cf5b70&=1642&=6746)
- [alimentation USB-C 5.1V délivrant 3.0A](https://www.amazon.fr/RASPBERRY-Source-dalimentation-USB-C-5-1/dp/B07TZ89BT7/ref=sr_1_8?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=alimentation+raspberry+pi&qid=1637509887&sr=8-8&_encoding=UTF8&=techpadawan-21&=ur2&=e1ca22547153162c54b46a29a26af001&=1642&=6746)
- [câble Ethernet (optionnel)](https://www.amazon.fr/UGREEN-11260-Ethernet-Nintendo-Consoles/dp/B00QV1F1C4/ref=sr_1_5?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=cable%252Bethernet&qid=1637509968&sr=8-5&th=1&_encoding=UTF8&=techpadawan-21&=ur2&=76387b9bb690c482c043dfa9360efa18&=1642&=6746)

Les liens affiliés ci-dessus me permettent de toucher un certain pourcentage de la vente de ces produits, cela ne te coûte rien et permet de faire vivre ce site.

## Installer le système d'exploitation sur le Raspberry Pi

Télécharge et installe [Raspberry Pi Imager](https://www.raspberrypi.com/software/).

Insère ta carte micro SD dans le lecteur de carte micro SD de ton ordinateur et lance Raspberry Pi Imager.

![Raspberry Pi Imager](https://res.cloudinary.com/dzzyt6yhh/image/upload/v1639018811/techpadawan/Screen_Shot_2021-11-21_at_14.54.14_lplwub.png)

Clique le bouton du milieu _CHOOSE STORAGE_ et sélectionne ta carte micro SD.

Clique sur le premier bouton _CHOOSE OS_, en bas de la liste sélectionne _Erase_ afin de formater la carte en FAT32. Formater la carte micro SD en FAT32 va t'épargner des soucis de compatibilité. ⚠️ **Attention, formater la carte micro SD va effacer tout le contenu de la carte. Assure-toi d'avoir récupéré tout ce dont tu avais besoin dessus si nécessaire.**

![Raspberry Pi Imager - Erase](https://res.cloudinary.com/dzzyt6yhh/image/upload/v1639018811/techpadawan/Screen_Shot_2021-11-21_at_14.54.36_kpcp0e.png)

Maintenant, clique sur le dernier bouton _WRITE_ afin de formater la carte micro SD.

Lorsque le formatage est terminé, clique sur le premier bouton _CHOOSE OS_, sélectionne la deuxième option _Raspberry Pi OS (other)_ puis sélectionne _Raspberry Pi OS Lite (32-bit)_. Tu n'auras pas besoin de l'interface graphique du système d'exploitation, cela te fera économiser quelques ressources sur ton Raspberry Pi.

Entre la combinaison suivante des touches de ton clavier CMD+SHIFT+X (CTRL+SHIFT+X si tu es sur Windows) pour accéder au menu secret de configuration.

Tu vas cocher les éléments suivants :

- _Set hostname: raspberrypi.local_
  Cela va te permettre de te connecter à ton Raspberry Pi facilement tout à l'heure.
- _Enable SSH_ et séletionne _Use password authentication_
  Dans _Set password for 'pi' user_, entre le mot de passe de ton choix. L'authentification par mot de passe n'est pas très sécurisée mais on va y remédier un peu plus tard.
  ![Raspberry Pi Imager - SSH](https://res.cloudinary.com/dzzyt6yhh/image/upload/v1639018811/techpadawan/Screen_Shot_2021-11-21_at_15.15.16_rifnl8.png)
- _Configure wifi_ si tu souhaites connecter ton Raspberry Pi au wifi. Personnellement je préfère connecter le mien par câble Ethernet.
  Entre le nom de ton wifi dans _SSID_ et son mot de passe dans _Password_.
  Sélectionne l'acronyme du pays où tu te trouves.
  ![Raspberry Pi Imager - WiFi](https://res.cloudinary.com/dzzyt6yhh/image/upload/v1639018811/techpadawan/Screen_Shot_2021-11-21_at_15.16.29_kiuzu2.png)
- _Set locale settings_
  Dans _Time Zone_ sélectionne ton fuseau horaire et dans _Keyboard layout_ entre le type de clavier que tu as (`fr` pour un clavier AZERTY français).
  ![Raspberry Pi Imager - Locale](https://res.cloudinary.com/dzzyt6yhh/image/upload/v1639018811/techpadawan/Screen_Shot_2021-11-21_at_15.16.38_t0amn3.png)

Clique sur _SAVE_ et ferme ce menu.

Enfin, clique sur _WRITE_ pour installer l'OS sur la carte micro SD.
L'OS que tu es en train d'installer, _Raspberry Pi OS_ est aussi connu sous le nom de _Raspbian_ car c'est une variante de la distribution _Debian_ qui est une version de Linux.

Une fois que l'écriture de la carte est terminée, insère la carte micro SD dans le lecteur de carte micro SD du Raspberry Pi et relie le Raspberry Pi à ton routeur avec un câble Ethernet si tu n'as pas choisi l'option wifi dans la configuration plus haut. Enfin branche le câble USB-C relié à un adaptateur secteur au port USB-C du Raspberry Pi pour le démarrer.

## Se connecter au Raspberry Pi via SSH

Secure Shell (SSH) va te permettre d'accéder à la ligne de commande de ton Raspberry Pi depuis ton ordinateur dès lors que ces deux appareils se trouvent sur le même réseau.

### Mac

Lance l'application _Terminal_ sur ton Mac et entre la commande suivante :

```bash
ssh pi@raspberrypi.local
```

Tu devrais voir apparaître un message d'avertissement te demandant si tu souhaites continuer à te connecter, entre `yes`.

Ensuite un message va te demander un mot de passe. Entre le mot de passe que tu as définis plus haut dans le menu de configuration.

### Windows

Si tu es sur Windows, tu peux télécharger et utiliser [PuTTY](https://www.putty.org/) en exécutant le fichier _putty.exe_ et tu devrais te retrouver avec une interface semblable à ci-dessous, entre `raspberrypi` dans _Host Name (or IP address)_ et clique sur _Open_ :

![PuTTy](https://res.cloudinary.com/dzzyt6yhh/image/upload/v1639018810/techpadawan/putty_mxa4m5.png)

Tu devrais voir apparaître un message d'avertissement te demandant si tu souhaites continuer à te connecter, clique _Accept_.

PuTTy devrait ouvrir une nouvelle fenêtre et te demander un nom d'utilisateur et mot de passe. Le nom d'utilisateur par défaut est `pi` et le mot de passe est celui que tu as définis plus haut dans le menu de configuration.

Félicitations, tu es maintenant connecté à ton Raspberry Pi !

## Installer les mises à jour système

Entre la commande suivante :

```bash
sudo apt update && sudo apt upgrade -y
```

Voilà, ton Raspberry Pi est maintenant à jour et tu peux maintenant l'utiliser pour différents projets !
