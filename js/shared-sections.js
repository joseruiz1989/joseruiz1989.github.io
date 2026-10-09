/* ============================================================
   SHARED PORTFOLIO SECTIONS: Affiliations & Skills
   Jose Ruiz Portfolio
   Usage:
     Include <script src="js/shared-sections.js"></script>
     Placeholders:
       <div id="affiliations-placeholder"></div>
       <div id="skills-placeholder"></div>
     The script automatically populates these placeholders on DOM ready,
     or you can call:
       renderAffiliations('affiliations-placeholder');
       renderSkills('skills-placeholder');
   ============================================================ */

(function () {
  var affiliationsHtml = '\
	<!--================ Brand / Academic & Research Institutions =================-->\
	<section class="affiliations-section">\
		<div class="container">\
			<div class="row justify-content-center">\
				<div class="col-lg-8 text-center mb-5">\
					<div class="main_title">\
						<h2>Academic &amp; Research Affiliations</h2>\
						<p>Universities and laboratories where I have studied, conducted Ph.D. &amp; Postdoctoral\
							research, and collaborated internationally.</p>\
					</div>\
				</div>\
			</div>\
\
			<!-- Universities Sub-category -->\
			<div class="row justify-content-center mb-4">\
				<div class="col-12 text-center mb-3">\
					<h4 class="affiliation-subtitle">🎓 Universities</h4>\
				</div>\
				<!-- UDENAR -->\
				<div class="col-6 col-md-3 mb-4">\
					<div class="affiliation-card">\
						<div class="affiliation-img-wrapper">\
							<img src="img/brands/logo_udenar.png" alt="Universidad de Nariño (UDENAR)">\
						</div>\
						<h5>Universidad de Nariño</h5>\
						<span class="affiliation-role">B.Sc. Electronics Eng.</span>\
						<span class="affiliation-country">🇨🇴 Colombia</span>\
					</div>\
				</div>\
				<!-- PUC-Rio -->\
				<div class="col-6 col-md-3 mb-4">\
					<div class="affiliation-card">\
						<div class="affiliation-img-wrapper">\
							<img src="img/brands/logo_pucrio.svg" alt="PUC-Rio">\
						</div>\
						<h5>PUC-Rio</h5>\
						<span class="affiliation-role">M.Sc. &amp; Ph.D. Electrical Eng.</span>\
						<span class="affiliation-country">🇧🇷 Brazil</span>\
					</div>\
				</div>\
				<!-- UFRJ -->\
				<div class="col-6 col-md-3 mb-4">\
					<div class="affiliation-card">\
						<div class="affiliation-img-wrapper">\
							<img src="img/brands/logo_ufrj.png" alt="UFRJ">\
						</div>\
						<h5>UFRJ</h5>\
						<span class="affiliation-role">Postdoctoral Researcher</span>\
						<span class="affiliation-country">🇧🇷 Brazil</span>\
					</div>\
				</div>\
				<!-- Université de Sherbrooke -->\
				<div class="col-6 col-md-3 mb-4">\
					<div class="affiliation-card">\
						<div class="affiliation-img-wrapper">\
							<img src="img/brands/logo_sherbrooke.svg" alt="Université de Sherbrooke">\
						</div>\
						<h5>Université de Sherbrooke</h5>\
						<span class="affiliation-role">Postdoctoral Researcher</span>\
						<span class="affiliation-country">🇨🇦 Canada</span>\
					</div>\
				</div>\
			</div>\
\
			<!-- Laboratories Sub-category -->\
			<div class="row justify-content-center mt-2">\
				<div class="col-12 text-center mb-3">\
					<h4 class="affiliation-subtitle">🔬 Research Laboratories &amp; Institutes</h4>\
				</div>\
				<!-- ICA -->\
				<div class="col-6 col-md-4 mb-4">\
					<div class="affiliation-card">\
						<div class="affiliation-img-wrapper">\
							<img src="img/brands/LogoICA.png" alt="ICA Lab - PUC-Rio">\
						</div>\
						<h5>ICA Lab</h5>\
						<p class="lab-desc">Instituto de Computação Aplicada · PUC-Rio</p>\
						<span class="affiliation-role">NLP &amp; Cognitive Search AI</span>\
						<span class="affiliation-country">🇧🇷 Rio de Janeiro, Brazil</span>\
					</div>\
				</div>\
				<!-- Fraunhofer ISE -->\
				<div class="col-6 col-md-4 mb-4">\
					<div class="affiliation-card">\
						<div class="affiliation-img-wrapper">\
							<img src="img/brands/logo_fraunhofer.svg" alt="Fraunhofer ISE">\
						</div>\
						<h5>Fraunhofer ISE</h5>\
						<p class="lab-desc">Fraunhofer-Institut für Solare Energiesysteme</p>\
						<span class="affiliation-role">Ph.D. MOVPE Nanotech Research</span>\
						<span class="affiliation-country">🇩🇪 Freiburg, Germany</span>\
					</div>\
				</div>\
				<!-- 3IT -->\
				<div class="col-6 col-md-4 mb-4">\
					<div class="affiliation-card">\
						<div class="affiliation-img-wrapper">\
							<img src="img/brands/logo_3it.svg" alt="3IT - Université de Sherbrooke">\
						</div>\
						<h5>3IT</h5>\
						<p class="lab-desc">Institut Interdisciplinaire d\'Innovation Technologique</p>\
						<span class="affiliation-role">Semiconductor Laser Cleanroom</span>\
						<span class="affiliation-country">🇨🇦 Sherbrooke, Canada</span>\
					</div>\
				</div>\
			</div>\
\
		</div>\
	</section>\
	<!--================ End Brand / Academic & Research Institutions =================-->';

  var skillsHtml = '\
	<!--================ Skills & Technologies =================-->\
	<section class="skills-section">\
		<div class="container">\
			<div class="row justify-content-center">\
				<div class="col-lg-8 text-center">\
					<div class="main_title">\
						<h2>Skills &amp; Technologies</h2>\
						<p>Comprehensive engineering toolkit spanning Artificial Intelligence, Data Science, Software\
							Development, and Applied Metrology.</p>\
					</div>\
				</div>\
			</div>\
\
			<!-- Category 1: Machine Learning & Artificial Intelligence -->\
			<div class="row mt-4">\
				<div class="col-12">\
					<div class="skill-category-title">\
						<i class="fa fa-braille"></i> Machine Learning &amp; Deep Learning\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-python-plain colored"></i>\
						</div>\
						Python\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-pytorch-original colored"></i>\
						</div>\
						PyTorch\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-tensorflow-original colored"></i>\
						</div>\
						TensorFlow\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-scikitlearn-plain colored"></i>\
						</div>\
						Scikit-Learn\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-opencv-plain colored"></i>\
						</div>\
						OpenCV\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<img src="img/brands/logo_detectron2.svg" alt="Detectron2">\
						</div>\
						Detectron2\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-sitemap" style="color:#a09bff;"></i>\
						</div>\
						Genetic Algorithms\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-bolt" style="color:#ffb74d;"></i>\
						</div>\
						ONNX / TensorRT\
					</div>\
				</div>\
			</div>\
\
			<!-- Category 2: Data Science, Analytics & Databases -->\
			<div class="row mt-4">\
				<div class="col-12">\
					<div class="skill-category-title">\
						<i class="fa fa-line-chart"></i> Data Science, Analytics &amp; Storage\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-numpy-plain colored"></i>\
						</div>\
						NumPy\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-pandas-plain colored"></i>\
						</div>\
						Pandas\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-matlab-plain colored"></i>\
						</div>\
						MATLAB\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-postgresql-plain colored"></i>\
						</div>\
						PostgreSQL / SQL\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-database" style="color:#4cd498;"></i>\
						</div>\
						HDF5 Data\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-jupyter-plain colored"></i>\
						</div>\
						Jupyter Lab\
					</div>\
				</div>\
			</div>\
\
			<!-- Category 3: Software Engineering, Cloud & DevOps -->\
			<div class="row mt-4">\
				<div class="col-12">\
					<div class="skill-category-title">\
						<i class="fa fa-code"></i> Software Engineering &amp; DevOps\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-cplusplus-plain colored"></i>\
						</div>\
						C / C++\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-java-plain colored"></i>\
						</div>\
						Java / Swing\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-docker-plain colored"></i>\
						</div>\
						Docker\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-git-plain colored"></i>\
						</div>\
						Git / GitHub\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-fastapi-plain colored"></i>\
						</div>\
						FastAPI / Django\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-microchip" style="color:#766dff;"></i>\
						</div>\
						Embedded dsPIC\
					</div>\
				</div>\
			</div>\
\
			<!-- Category 4: HPC, Simulation & Metrology -->\
			<div class="row mt-4">\
				<div class="col-12">\
					<div class="skill-category-title">\
						<i class="fa fa-cogs"></i> HPC, Simulation &amp; Metrology\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="devicon-linux-plain colored"></i>\
						</div>\
						SLURM / HPC\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-cubes" style="color:#4cd498;"></i>\
						</div>\
						CMG Reservoir\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-sun-o" style="color:#ffca28;"></i>\
						</div>\
						MOVPE Epitaxy\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-search-plus" style="color:#42a5f5;"></i>\
						</div>\
						AFM Metrology\
					</div>\
				</div>\
				<div class="col-6 col-md-3 col-lg-2 mb-3">\
					<div class="skill-badge">\
						<div class="skill-icon-wrap">\
							<i class="fa fa-crosshairs" style="color:#66bb6a;"></i>\
						</div>\
						Interferometry\
					</div>\
				</div>\
			</div>\
		</div>\
	</section>\
	<!--================ End Skills =================-->';

  function renderAffiliations(targetId) {
    var id = targetId || 'affiliations-placeholder';
    var el = document.getElementById(id);
    if (el) {
      el.outerHTML = affiliationsHtml;
      if (window.twemoji) {
        window.twemoji.parse(document.body, { folder: 'svg', ext: '.svg' });
      }
    }
  }

  function renderSkills(targetId) {
    var id = targetId || 'skills-placeholder';
    var el = document.getElementById(id);
    if (el) {
      el.outerHTML = skillsHtml;
    }
  }

  function init() {
    if (document.getElementById('affiliations-placeholder')) {
      renderAffiliations('affiliations-placeholder');
    }
    if (document.getElementById('skills-placeholder')) {
      renderSkills('skills-placeholder');
    }
    if (window.twemoji) {
      window.twemoji.parse(document.body, { folder: 'svg', ext: '.svg' });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.renderAffiliations = renderAffiliations;
  window.renderSkills = renderSkills;
})();
