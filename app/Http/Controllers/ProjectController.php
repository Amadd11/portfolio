<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //

    public function show(Project $project)
    {
        return Inertia::render('ProjectDetails', [
            'project' => $project
        ]);
    }
}
