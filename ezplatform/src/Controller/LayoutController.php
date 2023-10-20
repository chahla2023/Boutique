<?php

namespace App\Controller;


use eZ\Bundle\EzPublishCoreBundle\Controller;
use eZ\Publish\API\Repository\Repository;
use eZ\Publish\API\Repository\Values\Content\Query;
use eZ\Publish\Core\MVC\Symfony\View\ContentView;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion;

class LayoutController extends Controller
{

    public function viewAction(ContentView $view)
    {
        // TODO fetch last 5 product to return in view
        return $view;
    }

    public function headerAction()
    {

    }

    public function getMenu() {

    }

//    public function footerAction(ContentView $view)
//    {
//
//    }
}