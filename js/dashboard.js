/* ==========================================
   AUREUS DASHBOARD JAVASCRIPT
========================================== */


/* ================= AUTH CHECK ================= */

const loggedIn = localStorage.getItem("aureusLoggedIn");

if (loggedIn !== "true") {
    window.location.href = "index.html";
}


/* ================= ELEMENTS ================= */

const content = document.getElementById("content");
const pageTitle = document.getElementById("pageTitle");

const sidebar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobileMenu");

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");

const profileButton = document.getElementById("profileButton");
const profileDropdown = document.getElementById("profileDropdown");

const logoutBtn = document.getElementById("logoutBtn");
const dropdownLogout = document.getElementById("dropdownLogout");

const notificationButton =
    document.getElementById("notificationButton");


/* ================= PAGE DATA ================= */

const pages = {

    overview: {

        title: "Overview",

        render: `
        
        <div class="page-header">

            <div>
                <h1>Good morning, Admin.</h1>

                <p>
                    Welcome back to your Aureus business command center.
                </p>
            </div>

            <button class="gold-btn" onclick="showModal(
                'Create New Project',
                'Project creation interface can be connected to your backend or database here.'
            )">
                <i class="fa-solid fa-plus"></i>
                New Project
            </button>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>

                    <span class="growth">+12.5%</span>
                </div>

                <h3>48</h3>

                <p>Active Projects</p>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-users"></i>
                    </div>

                    <span class="growth">+8.2%</span>
                </div>

                <h3>126</h3>

                <p>Global Clients</p>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>

                    <span class="growth">+18.7%</span>
                </div>

                <h3>₹8.4M</h3>

                <p>Project Value</p>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-building"></i>
                    </div>

                    <span class="growth">+5.4%</span>
                </div>

                <h3>24</h3>

                <p>Enterprise Partners</p>

            </div>

        </div>


        <div class="dashboard-grid">

            <div class="panel">

                <div class="panel-header">

                    <h3>Recent Projects</h3>

                    <button onclick="navigate('projects')">
                        View all
                    </button>

                </div>

                <div class="project-list">

                    ${projectRow(
                        "Aureus Infrastructure",
                        "Infrastructure",
                        "Active",
                        "78%"
                    )}

                    ${projectRow(
                        "Quantum Security",
                        "Technology",
                        "Active",
                        "64%"
                    )}

                    ${projectRow(
                        "Global Finance Suite",
                        "Finance",
                        "Pending",
                        "41%"
                    )}

                    ${projectRow(
                        "Smart Manufacturing",
                        "Industrial",
                        "Completed",
                        "100%"
                    )}

                </div>

            </div>


            <div class="panel">

                <div class="panel-header">

                    <h3>Recent Activity</h3>

                    <button onclick="navigate('notifications')">
                        View all
                    </button>

                </div>

                <div class="activity">

                    ${activity(
                        "fa-file-circle-check",
                        "Project proposal approved",
                        "12 minutes ago"
                    )}

                    ${activity(
                        "fa-user-plus",
                        "New client onboarded",
                        "1 hour ago"
                    )}

                    ${activity(
                        "fa-chart-line",
                        "Analytics report generated",
                        "3 hours ago"
                    )}

                    ${activity(
                        "fa-message",
                        "New client message",
                        "5 hours ago"
                    )}

                </div>

            </div>

        </div>

        `

    },


    /* ================= PRODUCTS ================= */

    products: {

        title: "Products",

        render: `

        <div class="page-header">

            <div>
                <h1>Our Products</h1>

                <p>
                    Explore Aureus enterprise products and capabilities.
                </p>
            </div>

        </div>


        <div class="cards-grid">

            ${infoCard(
                "fa-shield-halved",
                "Aureus Secure",
                "Enterprise-grade cybersecurity and digital protection.",
                "Security"
            )}

            ${infoCard(
                "fa-microchip",
                "Aureus Quantum",
                "Next-generation quantum-ready computing solutions.",
                "Quantum"
            )}

            ${infoCard(
                "fa-cloud",
                "Aureus Cloud",
                "Scalable infrastructure designed for enterprise workloads.",
                "Cloud"
            )}

            ${infoCard(
                "fa-robot",
                "Aureus AI",
                "Intelligent automation and AI-driven business systems.",
                "Artificial Intelligence"
            )}

            ${infoCard(
                "fa-network-wired",
                "Aureus Connect",
                "Enterprise networking and communication infrastructure.",
                "Networking"
            )}

            ${infoCard(
                "fa-database",
                "Aureus Data",
                "Secure enterprise data management and analytics.",
                "Data"
            )}

        </div>

        `
    },


    /* ================= SOLUTIONS ================= */

    solutions: {

        title: "Solutions",

        render: `

        <div class="page-header">

            <div>

                <h1>Enterprise Solutions</h1>

                <p>
                    Technology solutions designed around complex business needs.
                </p>

            </div>

        </div>


        <div class="cards-grid">

            ${infoCard(
                "fa-lock",
                "Cybersecurity",
                "Protect infrastructure, applications and sensitive enterprise data.",
                "Explore Solution"
            )}

            ${infoCard(
                "fa-brain",
                "AI Transformation",
                "Integrate intelligent automation into business operations.",
                "Explore Solution"
            )}

            ${infoCard(
                "fa-atom",
                "Quantum Readiness",
                "Prepare organizations for the emerging quantum computing era.",
                "Explore Solution"
            )}

            ${infoCard(
                "fa-globe",
                "Digital Transformation",
                "Modernize legacy systems and enterprise workflows.",
                "Explore Solution"
            )}

            ${infoCard(
                "fa-chart-simple",
                "Business Intelligence",
                "Turn enterprise data into actionable business insights.",
                "Explore Solution"
            )}

            ${infoCard(
                "fa-server",
                "Infrastructure",
                "Build resilient and scalable enterprise infrastructure.",
                "Explore Solution"
            )}

        </div>

        `
    },


    /* ================= PROJECTS ================= */

    projects: {

        title: "Projects",

        render: `

        <div class="page-header">

            <div>

                <h1>Projects</h1>

                <p>
                    Monitor and manage your organization's projects.
                </p>

            </div>

            <button class="gold-btn"
                onclick="showModal(
                'New Project',
                'Project creation form can be connected to your backend here.'
                )">

                <i class="fa-solid fa-plus"></i>
                Add Project

            </button>

        </div>


        <div class="panel">

            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>
                            <th>PROJECT</th>
                            <th>CATEGORY</th>
                            <th>CLIENT</th>
                            <th>STATUS</th>
                            <th>PROGRESS</th>
                            <th>ACTION</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${projectTable(
                            "Aureus Infrastructure",
                            "Infrastructure",
                            "Global Holdings",
                            "Active",
                            "78%"
                        )}

                        ${projectTable(
                            "Quantum Security",
                            "Technology",
                            "Nexus Corp",
                            "Active",
                            "64%"
                        )}

                        ${projectTable(
                            "Global Finance Suite",
                            "Finance",
                            "Meridian Bank",
                            "Pending",
                            "41%"
                        )}

                        ${projectTable(
                            "Smart Manufacturing",
                            "Industrial",
                            "Vertex Industries",
                            "Completed",
                            "100%"
                        )}

                    </tbody>

                </table>

            </div>

        </div>

        `
    },


    /* ================= CLIENTS ================= */

    clients: {

        title: "Clients",

        render: `

        <div class="page-header">

            <div>

                <h1>Global Clients</h1>

                <p>
                    Manage your enterprise client relationships.
                </p>

            </div>

            <button class="gold-btn"
                onclick="showModal(
                'Add Client',
                'Client onboarding form can be connected here.'
                )">

                <i class="fa-solid fa-user-plus"></i>
                Add Client

            </button>

        </div>


        <div class="cards-grid">

            ${clientCard(
                "GH",
                "Global Holdings",
                "Infrastructure",
                "12 Projects"
            )}

            ${clientCard(
                "NC",
                "Nexus Corporation",
                "Technology",
                "8 Projects"
            )}

            ${clientCard(
                "MB",
                "Meridian Bank",
                "Finance",
                "15 Projects"
            )}

            ${clientCard(
                "VI",
                "Vertex Industries",
                "Manufacturing",
                "7 Projects"
            )}

            ${clientCard(
                "AS",
                "Apex Systems",
                "Technology",
                "5 Projects"
            )}

            ${clientCard(
                "OR",
                "Orion Group",
                "Energy",
                "11 Projects"
            )}

        </div>

        `
    },


    /* ================= ANALYTICS ================= */

    analytics: {

        title: "Analytics",

        render: `

        <div class="page-header">

            <div>

                <h1>Business Analytics</h1>

                <p>
                    Track performance across your Aureus ecosystem.
                </p>

            </div>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-arrow-trend-up"></i>
                </div>

                <h3>24.8%</h3>

                <p>Annual Growth</p>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-users"></i>
                </div>

                <h3>92.4%</h3>

                <p>Client Retention</p>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-clock"></i>
                </div>

                <h3>87%</h3>

                <p>Project Efficiency</p>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-star"></i>
                </div>

                <h3>4.9/5</h3>

                <p>Client Satisfaction</p>

            </div>

        </div>


        <div class="panel">

            <div class="panel-header">

                <h3>Monthly Project Performance</h3>

                <button>2026</button>

            </div>


            <div class="chart-container">

                ${bar("62%", "Jan")}

                ${bar("74%", "Feb")}

                ${bar("68%", "Mar")}

                ${bar("82%", "Apr")}

                ${bar("76%", "May")}

                ${bar("91%", "Jun")}

                ${bar("87%", "Jul")}

                ${bar("95%", "Aug")}

                ${bar("88%", "Sep")}

            </div>

        </div>

        `
    },


    /* ================= NOTIFICATIONS ================= */

    notifications: {

        title: "Notifications",

        render: `

        <div class="page-header">

            <div>

                <h1>Notifications</h1>

                <p>
                    Stay updated with your Aureus workspace.
                </p>

            </div>

        </div>


        ${notification(
            "fa-file-circle-check",
            "Project proposal approved",
            "The Aureus Infrastructure proposal has been approved.",
            "12 minutes ago"
        )}

        ${notification(
            "fa-user-plus",
            "New client onboarded",
            "Nexus Corporation has successfully joined Aureus.",
            "1 hour ago"
        )}

        ${notification(
            "fa-chart-line",
            "Analytics report ready",
            "Your September business performance report is ready.",
            "3 hours ago"
        )}

        ${notification(
            "fa-message",
            "New client message",
            "You have received a new message from Global Holdings.",
            "5 hours ago"
        )}

        `
    },


    /* ================= PROFILE ================= */

    profile: {

        title: "Profile",

        render: `

        <div class="page-header">

            <div>

                <h1>My Profile</h1>

                <p>
                    Manage your Aureus account information.
                </p>

            </div>

        </div>


        <div class="profile-card">

            <div>

                <div class="big-avatar">
                    AJ
                </div>

            </div>


            <div>

                <h2 style="margin-bottom:25px;">
                    Admin User
                </h2>

                <div class="profile-details">

                    ${detail("Full Name", "Admin User")}

                    ${detail("Role", "Administrator")}

                    ${detail("Email", "admin@aureus.com")}

                    ${detail("Department", "Enterprise Operations")}

                    ${detail("Location", "India")}

                    ${detail("Member Since", "January 2026")}

                </div>

            </div>

        </div>

        `
    },


    /* ================= SETTINGS ================= */

    settings: {

        title: "Settings",

        render: `

        <div class="page-header">

            <div>

                <h1>Settings</h1>

                <p>
                    Customize your Aureus workspace.
                </p>

            </div>

        </div>


        <div class="settings-list">

            ${setting(
                "Email Notifications",
                "Receive updates about projects and clients.",
                true
            )}

            ${setting(
                "Project Alerts",
                "Get notified when project status changes.",
                true
            )}

            ${setting(
                "Security Alerts",
                "Receive important security notifications.",
                true
            )}

            ${setting(
                "Marketing Updates",
                "Receive Aureus product and company updates.",
                false
            )}

            ${setting(
                "Weekly Reports",
                "Receive a weekly business performance summary.",
                false
            )}

        </div>

        `
    }

};


/* ================= COMPONENT FUNCTIONS ================= */

function projectRow(name, category, status, progress) {

    const statusClass =
        status.toLowerCase();

    return `

        <div class="project-row">

            <div class="project-name">

                <strong>${name}</strong>

                <small>${category}</small>

            </div>

            <span class="status ${statusClass}">
                ${status}
            </span>

            <small style="color:#777;">
                ${progress}
            </small>

            <button
                class="details-btn"
                onclick="showModal(
                '${name}',
                'Detailed project information for ${name}.'
                )">

                Details

            </button>

        </div>

    `;
}


function activity(icon, title, time) {

    return `

        <div class="activity-item">

            <div class="activity-icon">

                <i class="fa-solid ${icon}"></i>

            </div>

            <div>

                <strong>${title}</strong>

                <small>${time}</small>

            </div>

        </div>

    `;
}


function infoCard(icon, title, description, buttonText) {

    return `

        <div class="info-card">

            <div class="card-icon">

                <i class="fa-solid ${icon}"></i>

            </div>

            <h3>${title}</h3>

            <p>${description}</p>

            <button
                class="details-btn"
                onclick="showModal(
                '${title}',
                '${description} This section can contain complete product specifications, features, pricing, documentation and enterprise information.'
                )">

                ${buttonText}

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        </div>

    `;
}


function projectTable(
    project,
    category,
    client,
    status,
    progress
) {

    return `

        <tr>

            <td>
                <strong>${project}</strong>
            </td>

            <td>${category}</td>

            <td>${client}</td>

            <td>
                <span class="status ${status.toLowerCase()}">
                    ${status}
                </span>
            </td>

            <td>${progress}</td>

            <td>

                <button
                    class="details-btn"
                    onclick="showModal(
                    '${project}',
                    'Complete information about ${project}, including client details, project timeline, team members, milestones and progress.'
                    )">

                    View

                </button>

            </td>

        </tr>

    `;
}


function clientCard(
    initials,
    name,
    industry,
    projects
) {

    return `

        <div class="info-card">

            <div class="card-icon">

                ${initials}

            </div>

            <h3>${name}</h3>

            <p>
                ${industry} enterprise partner
                working with Aureus.
            </p>

            <small style="color:#777;">
                ${projects}
            </small>

            <br><br>

            <button
                class="details-btn"
                onclick="showModal(
                '${name}',
                'Client profile containing company information, active projects, contracts, communication history and performance data.'
                )">

                View Client

            </button>

        </div>

    `;
}


function bar(height, month) {

    return `

        <div
            class="bar"
            style="height:${height};">

            <span>${height}</span>

            <div class="bar-label">
                ${month}
            </div>

        </div>

    `;
}


function notification(
    icon,
    title,
    description,
    time
) {

    return `

        <div class="notification-card">

            <i class="fa-solid ${icon}"></i>

            <div>

                <strong>${title}</strong>

                <p>${description}</p>

                <small>${time}</small>

            </div>

        </div>

    `;
}


function detail(label, value) {

    return `

        <div class="detail-box">

            <label>${label}</label>

            <strong>${value}</strong>

        </div>

    `;
}


function setting(title, description, enabled) {

    return `

        <div class="setting-row">

            <div>

                <strong>${title}</strong>

                <small>${description}</small>

            </div>

            <div
                class="toggle ${enabled ? "active" : ""}"
                onclick="toggleSetting(this)">
            </div>

        </div>

    `;
}


/* ================= NAVIGATION ================= */

function navigate(page) {

    if (!pages[page]) return;

    content.innerHTML = pages[page].render;

    pageTitle.textContent = pages[page].title;

    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove("active");

            if (
                item.dataset.page === page
            ) {

                item.classList.add("active");

            }

        });

    sidebar.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= SIDEBAR EVENTS ================= */

document
    .querySelectorAll(".nav-item")
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {

                navigate(
                    item.dataset.page
                );

            }
        );

    });


/* ================= MOBILE MENU ================= */

mobileMenu.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle("open");

    }
);


/* ================= PROFILE MENU ================= */

profileButton.addEventListener(
    "click",
    () => {

        profileDropdown.classList.toggle(
            "show"
        );

    }
);


document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".profile-menu"
            )
        ) {

            profileDropdown.classList.remove(
                "show"
            );

        }

    }
);


/* ================= PROFILE DROPDOWN ================= */

profileDropdown
    .querySelectorAll("[data-page]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                navigate(
                    button.dataset.page
                );

                profileDropdown.classList.remove(
                    "show"
                );

            }
        );

    });


/* ================= MODAL ================= */

function showModal(title, description) {

    modalContent.innerHTML = `

        <h2>${title}</h2>

        <p>${description}</p>

        <br>

        <button
            class="gold-btn"
            onclick="closeModal()">

            Continue

        </button>

    `;

    modalOverlay.classList.add("show");
}


function closeModal() {

    modalOverlay.classList.remove("show");

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === modalOverlay
        ) {

            closeModal();

        }

    }
);


/* ================= SETTINGS ================= */

function toggleSetting(element) {

    element.classList.toggle("active");

}


/* ================= LOGOUT ================= */

function logout() {

    localStorage.removeItem(
        "aureusLoggedIn"
    );

    window.location.href =
        "index.html";
}


logoutBtn.addEventListener(
    "click",
    logout
);


dropdownLogout.addEventListener(
    "click",
    logout
);


/* ================= NOTIFICATION BUTTON ================= */

notificationButton.addEventListener(
    "click",
    () => {

        navigate("notifications");

    }
);


/* ================= SEARCH ================= */

const globalSearch =
    document.getElementById(
        "globalSearch"
    );

globalSearch.addEventListener(
    "input",
    function () {

        const query =
            this.value.toLowerCase().trim();

        if (!query) {

            return;

        }

        const matches =
            Object.keys(pages)
            .filter(page =>
                page.toLowerCase()
                .includes(query)
            );

        if (matches.length > 0) {

            navigate(matches[0]);

        }

    }
);


/* ================= INITIAL PAGE ================= */

navigate("overview");
