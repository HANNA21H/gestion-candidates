import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { end_points } from "../../services/api";

export default function DashboardPage() {
  return (
    <section className="page">
      <header className="page__header">
        <div>
          <h1 className="page__title">Dashboard</h1>
          <p className="page__subtitle">
            Overview of your recruitment pipeline
          </p>
        </div>
        <div className="page__actions">
          <Link className="btn" to="/offers/new">
            New offer
          </Link>
          <Link className="btn btn--primary" to="/candidates/new">
            New candidate
          </Link>
        </div>
      </header>

      <div className="grid grid--3">
        <article className="card">
          <div className="card__kpi">
            <div className="kpi">
              <div className="kpi__label">Open offers</div>
              <div className="kpi__value">12</div>
            </div>
            <div className="badge badge--success">Open</div>
          </div>
          <div className="card__meta">
            <div className="muted">Active roles published</div>
          </div>
        </article>

        <article className="card">
          <div className="card__kpi">
            <div className="kpi">
              <div className="kpi__label">New candidates</div>
              <div className="kpi__value">28</div>
            </div>
            <div className="badge">This week</div>
          </div>
          <div className="card__meta">
            <div className="muted">Recently added profiles</div>
          </div>
        </article>

        <article className="card">
          <div className="card__kpi">
            <div className="kpi">
              <div className="kpi__label">Users</div>
              <div className="kpi__value">4</div>
            </div>
            <div className="badge badge--info">Team</div>
          </div>
          <div className="card__meta">
            <div className="muted">Admins and recruiters</div>
          </div>
        </article>
      </div>

      <div className="grid grid--2">
        <section className="card">
          <header className="card__header">
            <div>
              <h2 className="card__title">Recent candidates</h2>
              <p className="card__subtitle">
                Latest profiles added to the system
              </p>
            </div>
            <Link className="link" to="/candidates">
              View all
            </Link>
          </header>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Seniority</th>
                  <th>Status</th>
                  <th className="right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="cell-title">Ana Martínez</div>
                    <div className="muted">ana.martinez@gmail.com</div>
                  </td>
                  <td>Junior</td>
                  <td>
                    <span className="badge">New</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/candidates/1">
                      Open
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cell-title">Carlos Rojas</div>
                    <div className="muted">c.rojas@gmail.com</div>
                  </td>
                  <td>Mid</td>
                  <td>
                    <span className="badge badge--info">In review</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/candidates/2">
                      Open
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cell-title">Laura Gómez</div>
                    <div className="muted">laura.gomez@gmail.com</div>
                  </td>
                  <td>Senior</td>
                  <td>
                    <span className="badge badge--success">Interview</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/candidates/3">
                      Open
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="card">
          <header className="card__header">
            <div>
              <h2 className="card__title">Open offers</h2>
              <p className="card__subtitle">
                Roles currently receiving candidates
              </p>
            </div>
            <Link className="link" to="/offers">
              View all
            </Link>
          </header>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th className="right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="cell-title">
                      Backend Developer (Node.js)
                    </div>
                    <div className="muted">Bogotá, CO · Hybrid</div>
                  </td>
                  <td>AndesFintech</td>
                  <td>
                    <span className="badge badge--success">Open</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/offers/1">
                      Open
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cell-title">Frontend Developer (React)</div>
                    <div className="muted">Medellín, CO · Remote</div>
                  </td>
                  <td>LatamRetail</td>
                  <td>
                    <span className="badge badge--success">Open</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/offers/2">
                      Open
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cell-title">QA Engineer</div>
                    <div className="muted">Bogotá, CO · On-site</div>
                  </td>
                  <td>CloudHealth</td>
                  <td>
                    <span className="badge">Draft</span>
                  </td>
                  <td className="right">
                    <Link className="btn btn--sm" to="/offers/3">
                      Open
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
}
