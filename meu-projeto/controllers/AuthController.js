exports.showLogin = (req, res) => {
  res.render('login', { error: null, userName: null });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Simples validação (exemplo fixo)
  if (email === 'admin@email.com' && password === '1234') {
    req.session.user = { name: 'Admin' };
    res.redirect('/menu');
  } else {
    res.render('login', { error: 'Email ou senha incorretos', userName: null });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
};

// ← Acrescente este middleware:
exports.ensureAuth = (req, res, next) => {
  if (req.session.user) {
    // Se o usuário estiver logado, deixa prosseguir
    return next();
  }
  // Caso contrário, redireciona para /login
  return res.redirect('/login');
};