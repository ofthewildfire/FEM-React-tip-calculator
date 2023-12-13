# Tip Calculator App

![Tip Calculator Screenshot](./public/Screenshot%202023-12-07%20at%2014-00-26%20Vite%20React.png)

![Live link](https://fem-react-tip-calculator.vercel.app/)

A simple React app to calculate tips and split the bill among friends. This is a
Frontendmentor.io challenge. 💰

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This React app is intented to make splitting bills and calculating tips a
easier. It's a straightforward tool that leverages React's useState and
useEffect hooks. I used React to practice React.

## Features

- **Calculate Tips:** Input your bill amount, select a tip percentage from
  preset buttons, or input a custom tip. See the calculated tip.
- **Split the Bill:** Adjust the number of people sharing the bill to get the
  individual tip per person.

## Technologies Used

- React
- HTML/CSS
- useState / useEffect shenanigans.

## Usage

1. Input your bill amount. Note: Decimal numbers are not currently supported
   (see [Issues](#issues)).
2. Select a tip percentage from the preset buttons or input a custom tip.
3. Specify the number of people sharing the bill.
4. Voila! Your calculated tip per person is displayed.

## Issues

### Decimal Number Input Issue

Currently, the app doesn't support decimal numbers in the bill input.

### useEffect Issue

If you are facing issues with the `useEffect` not updating the tip per person
state this known by me and I am trying to fix it. However it does update the
bill per person, best I have been able to deduce, it seems to update completely
wrong. So, when you change the bill just click another tip button and click back
to the one you want and it will be correct.
