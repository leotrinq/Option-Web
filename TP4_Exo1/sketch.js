function fond(couleur)
{
  background = document.getElementById('fond_blanc');
  background.style.background = couleur;
}

function sous_titres(couleur)
{
  soustitres = document.getElementsByClassName('st')
  for (const soustitre of soustitres)
    {
      soustitre.style.color = couleur;
    }
}