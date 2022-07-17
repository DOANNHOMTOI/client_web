<template>
  <div class="product-page" v-if="product != null">
    <div class="container">

      <nav class="woocommerce-breadcrumb">


        <router-link to="/">Home</router-link>

        <span class="separator">></span>


        <router-link to="/shop">Shop</router-link>

        <span class="separator">></span>

        <router-link to="#">{{ product.detail.name}}</router-link>
      </nav>
    </div>
    <div class="product-view">


      <div class="container">
      </div>
      <div id="product-2266"
           class="post-2266 product type-product status-publish has-post-thumbnail product_cat-health-beauty first instock shipping-taxable purchasable product-type-simple">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class='col-md-12' id='main_image'>
                <img :src="getPathFile(product.detail.image)"
                     alt='image'>
              </div>
              <div class='col-md-12' id='thumb_container'>
                <img
                  v-for="(item) in product.images"
                  :src='getPathFile(item.image)'>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="summary entry-summary single-product-info">

                <h1 class="product_title entry-title" >{{ product.detail.name }}</h1>
                <div class="price-box" itemprop="offers" itemscope itemtype="http://schema.org/Offer">

                  <p class="price">

                    <template v-if="parseInt(product.detail.price_sale) > 0">
                      <span class="woocommerce-Price-amount amount">
                      {{ parseInt(product.detail.price_sale) }}đ
                      </span>
                        <span class="woocommerce-Price-amount amount" style="color: black;text-decoration: line-through;font-size: 20px;padding-left: 20px;">
                      {{ product.detail.price }}đ
                      </span>
                    </template>

                    <template v-if="parseInt(product.detail.price_sale) == 0">
                      <span class="woocommerce-Price-amount amount">
                      {{ product.detail.price }}đ
                      </span>
                    </template>
                  </p>

                  <meta itemprop="price" content="80"/>
                  <meta itemprop="priceCurrency" content="GBP"/>
                  <link itemprop="availability" href="http://schema.org/InStock"/>

                </div>

                <div class="short-description" itemprop="description">
                  <p>{{ product.detail.excerpt}}</p>
                  <p><b>Số lượng</b> : {{ product.detail.qty}}</p>
                  <p><b>Mô tả</b> : {{ product.detail.description}}</p>
                </div>
                <template v-if="product.detail.qty > 0">
                  <form class="cart" method="post" enctype='multipart/form-data'>
                    <div class="quantity">
                      <input v-model="qty" type="number" class="input-text qty text" step="1" min="1" max="" name="quantity"
                             title="Qty" size="4" pattern="[0-9]*" inputmode="numeric"/>
                    </div>

                    <button @click="addToCart()" type="button" name="add-to-cart" value="2266" class="single_add_to_cart_button button alt">Thêm vào giỏ
                    </button>

                  </form>
                  <h5 style="font-weight: bold">Size</h5>
                  <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2266" style="display:flex;">
                    <div v-for="(size,i) in product.sizes" class="yith-wcwl-add-button show" style="display:block;margin: 10px">
                      <a @click="setSize(size.size)" :class="parseInt(size.size) == parseInt(sizeSet) ? 'active' : ''" href="javascript:void(0)" rel="nofollow">{{ size.size }}</a>
                    </div>

                    <div style="clear:both"></div>
                    <div class="yith-wcwl-wishlistaddresponse"></div>

                  </div>
                  <div style="clear:both"></div>
                  <h5 style="font-weight: bold">Màu</h5>
                  <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2266" style="display:flex;">
                    <div v-for="(color,i) in product.colors" class="yith-wcwl-add-button show" style="display:block;margin: 10px">
                      <a :class="color.color === colorSet ? 'active' : ''" @click="setColor(color.color)" href="javascript:void(0)" rel="nofollow">{{ color.color }}</a>
                    </div>

                    <div style="clear:both"></div>
                    <div class="yith-wcwl-wishlistaddresponse"></div>

                  </div>
                </template>
                <div style="clear:both"></div>
                <template v-if="product.detail.qty === 0">
                  <div style="color: red"><b>Sản phẩm đã hết hàng</b></div>
                </template>
              </div><!-- .summary -->
            </div>
          </div>
        </div>

        <div class="container">
          <div class="woocommerce-tabs wc-tabs-wrapper">
            <ul class="tabs wc-tabs" role="tablist">
              <li class="description_tab" :class="tab == 1 ? 'active' : ''" id="tab-title-description" role="tab" aria-controls="tab-description">
                <a @click="showTab(1)">Thông tin chi tiết</a>
              </li>
              <li class="reviews_tab" :class="tab == 2 ? 'active' : ''" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                <a @click="showTab(2)">Đánh giá sản phẩm</a>
              </li>
            </ul>
            <div v-if="tab == 1" class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
              <p v-html="product.detail.body"></p>
            </div>
            <div v-if="tab == 2" class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
              <div id="reviews">
                <div id="comments">
                  <ul class="commentlist">
                    <li v-for="(cmt,i) in listComment" :key="i" style="margin-bottom: 10px"
                        class="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-40">
                      <div id="comment-40" class="comment_container">
                        <div class="comment-text" style="padding: 10px;margin: auto;">
                          <div class="star-rating">
                            <span v-for="star in cmt.rate" class="fa fa-star checked"></span>
                          </div>
                          <p class="meta" style="padding-top: 10px">
                            <strong class="woocommerce-review__author" itemprop="author">{{ cmt.guest_info.name }}</strong>
                            <span class="woocommerce-review__dash">–</span>
<!--                            <time class="woocommerce-review__published-date" itemprop="datePublished" datetime="2015-03-23T04:45:38+00:00">{{ cmt.created_at }}</time>-->
                          </p>

                          <div class="description"><p>{{ cmt.comment }}</p>
                          </div>
                        </div>
                      </div>
                    </li><!-- #comment-## -->
                  </ul>
                </div>

                <div v-if="isShowRating && getStatusLogin" id="review_form_wrapper">
                  <div id="review_form">
                    <div id="respond" class="comment-respond">
                      <h3 id="reply-title" class="comment-reply-title">Đánh giá của bạn<small><a rel="nofollow"
                                                                                                 id="cancel-comment-reply-link"
                                                                                                 href="/james/shop/footwear/aenean-sagittis/#respond"
                                                                                                 style="display:none;">Cancel
                        reply</a></small></h3>
                      <form action="https://demo.roadthemes.com/james/wp-comments-post.php" method="post"
                            id="commentform" class="comment-form">
                        <p class="comment-form-rating">


                        <div class="star-rating" style="margin-bottom: 10px">
                          <span class="fa fa-star star-rate" :class="rate >= 1 ? 'checked' : ''" @click="rateStar(1)"></span>
                          <span class="fa fa-star star-rate" :class="rate >= 2 ? 'checked' : ''" @click="rateStar(2)"></span>
                          <span class="fa fa-star star-rate" :class="rate >= 3 ? 'checked' : ''" @click="rateStar(3)"></span>
                          <span class="fa fa-star star-rate" :class="rate >= 4 ? 'checked' : ''" @click="rateStar(4)"></span>
                          <span class="fa fa-star star-rate" :class="rate >= 5 ? 'checked' : ''" @click="rateStar(5)"></span>
                        </div>


                        <p class="comment-form-comment">
                      <textarea id="comment"
                                v-model="comment"
                                                                                                      name="comment"
                                                                                                      cols="45"
                                                                                                      rows="8"
                                                                                                      aria-required="true"></textarea>
                        </p>
                        <p class="form-submit">
                          <input name="submit" type="button" @click="ratingAPI" id="submit" class="submit" value="Đánh giá">
                        </p>
                             </form>
                    </div><!-- #respond -->
                  </div>
                </div>
                <div v-if="!getStatusLogin">
                  <button class="btn btn-primary">
                    <router-link style="color: white" to="/login">Đăng nhập để đánh giá</router-link>
                  </button>
                </div>


                <div class="clear"></div>
              </div>
            </div>
          </div>
          <div class="widget related_products_widget">
            <h3 class="widget-title"><span>Related Products</span></h3>

            <div class="related products">

              <div class="shop-products row grid-view slick-initialized slick-slider">



                <div class="slick-list draggable" tabindex="0"><div class="slick-track" style="opacity: 1; width: 1200px; transform: translate3d(0px, 0px, 0px);"><div class="item-col col-xs-12 col-sm-12 post-2309 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear product_cat-handbags product_cat-health-beauty product_cat-jewellery product_cat-shoes first instock featured shipping-taxable purchasable product-type-simple slick-slide slick-active" index="0" style="width: 300px;">
                  <div class="product-wrapper">

                    <div class="list-col4 ">
                      <div class="product-image">
                        <a href="https://demo.roadthemes.com/james/shop/footwear/ornare-sed-consequat/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">					<img width="500" height="500" src="//demo.roadthemes.com/james/wp-content/uploads/2014/10/5-500x500.jpg" class="primary_image wp-post-image" alt="5" srcset="//demo.roadthemes.com/james/wp-content/uploads/2014/10/5-500x500.jpg 500w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/5-150x150.jpg 150w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/5-300x300.jpg 300w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/5-768x768.jpg 768w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/5-600x600.jpg 600w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/5-200x200.jpg 200w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/5.jpg 800w" sizes="(max-width: 500px) 100vw, 500px"><img width="500" height="500" src="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-500x500.jpg" class="secondary_image" alt="6" srcset="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-500x500.jpg 500w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-150x150.jpg 150w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-300x300.jpg 300w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-768x768.jpg 768w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-600x600.jpg 600w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-200x200.jpg 200w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6.jpg 800w" sizes="(max-width: 500px) 100vw, 500px">				</a>				<div class="actions">
                        <ul class="add-to-links clearfix">
                          <li>
                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">

                              <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>515.00</span>
                              <a rel="nofollow" href="/james/shop/footwear/aenean-sagittis/?add-to-cart=2309" data-quantity="1" data-product_id="2309" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </p>						</li>

                          <li class="quickviewbtn">
                            <a class="detail-link quickview" data-quick-id="2309" href="https://demo.roadthemes.com/james/shop/footwear/ornare-sed-consequat/" title="Ornare sed consequat">Quick View</a>
                          </li>

                          <li>

                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2309">
                              <div class="yith-wcwl-add-button show" style="display:block">


                                <a href="/james/shop/footwear/aenean-sagittis/?add_to_wishlist=2309" rel="nofollow" data-product-id="2309" data-product-type="simple" class="add_to_wishlist">
                                  Add to Wishlist</a>

                              </div>

                              <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                <span class="feedback">Product added!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                <span class="feedback">The product is already in the wishlist!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div style="clear:both"></div>
                              <div class="yith-wcwl-wishlistaddresponse"></div>

                            </div>

                            <div class="clear"></div>						</li>
                          <li>
                            <div class="woocommerce product compare-button"><a href="https://demo.roadthemes.com/james?action=yith-woocompare-add-product&amp;id=2309&amp;lang=en" class="compare button" data-product_id="2309" rel="nofollow">Compare</a></div>						</li>
                        </ul>

                      </div>
                        <div class="list-col2">
                          <div class="list-col8 ">
                            <div class="gridview">
                              <h2 class="product-name">
                                <a href="https://demo.roadthemes.com/james/shop/footwear/ornare-sed-consequat/">Ornare sed consequat</a>
                              </h2>
                              <div class="ratings"><div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div></div>
                              <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>515.00</span></div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div class="list-col8 ">
                      <div class="gridview">
                        <h2 class="product-name">
                          <a href="https://demo.roadthemes.com/james/shop/footwear/ornare-sed-consequat/">Ornare sed consequat</a>
                        </h2>
                        <div class="ratings"><div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div></div>
                        <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>515.00</span></div>

                      </div>
                    </div>
                    <div class="clearfix"></div>

                  </div>
                </div><div class="item-col col-xs-12 col-sm-12 post-2315 product type-product status-publish has-post-thumbnail product_cat-footwear product_cat-handbags product_cat-jewellery product_cat-shoes product_tag-fashion first instock shipping-taxable purchasable product-type-simple slick-slide slick-active" index="1" style="width: 300px;">
                  <div class="product-wrapper">

                    <div class="list-col4 ">
                      <div class="product-image">
                        <a href="https://demo.roadthemes.com/james/shop/footwear/sagittis-luctus/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">					<img width="500" height="500" src="//demo.roadthemes.com/james/wp-content/uploads/2014/10/4-500x500.jpg" class="primary_image wp-post-image" alt="4" srcset="//demo.roadthemes.com/james/wp-content/uploads/2014/10/4-500x500.jpg 500w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/4-150x150.jpg 150w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/4-300x300.jpg 300w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/4-768x768.jpg 768w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/4-600x600.jpg 600w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/4-200x200.jpg 200w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/4.jpg 800w" sizes="(max-width: 500px) 100vw, 500px"><img width="500" height="500" src="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-500x500.jpg" class="secondary_image" alt="6" srcset="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-500x500.jpg 500w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-150x150.jpg 150w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-300x300.jpg 300w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-768x768.jpg 768w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-600x600.jpg 600w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6-200x200.jpg 200w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/6.jpg 800w" sizes="(max-width: 500px) 100vw, 500px">				</a>				<div class="actions">
                        <ul class="add-to-links clearfix">
                          <li>
                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">

                              <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>35.00</span>
                              <a rel="nofollow" href="/james/shop/footwear/aenean-sagittis/?add-to-cart=2315" data-quantity="1" data-product_id="2315" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </p>						</li>

                          <li class="quickviewbtn">
                            <a class="detail-link quickview" data-quick-id="2315" href="https://demo.roadthemes.com/james/shop/footwear/sagittis-luctus/" title="Sagittis luctus">Quick View</a>
                          </li>

                          <li>

                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2315">
                              <div class="yith-wcwl-add-button show" style="display:block">


                                <a href="/james/shop/footwear/aenean-sagittis/?add_to_wishlist=2315" rel="nofollow" data-product-id="2315" data-product-type="simple" class="add_to_wishlist">
                                  Add to Wishlist</a>

                              </div>

                              <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                <span class="feedback">Product added!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                <span class="feedback">The product is already in the wishlist!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div style="clear:both"></div>
                              <div class="yith-wcwl-wishlistaddresponse"></div>

                            </div>

                            <div class="clear"></div>						</li>
                          <li>
                            <div class="woocommerce product compare-button"><a href="https://demo.roadthemes.com/james?action=yith-woocompare-add-product&amp;id=2315&amp;lang=en" class="compare button" data-product_id="2315" rel="nofollow">Compare</a></div>						</li>
                        </ul>

                      </div>
                        <div class="list-col2">
                          <div class="list-col8 ">
                            <div class="gridview">
                              <h2 class="product-name">
                                <a href="https://demo.roadthemes.com/james/shop/footwear/sagittis-luctus/">Sagittis luctus</a>
                              </h2>
                              <div class="ratings"><div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div></div>
                              <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>35.00</span></div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div class="list-col8 ">
                      <div class="gridview">
                        <h2 class="product-name">
                          <a href="https://demo.roadthemes.com/james/shop/footwear/sagittis-luctus/">Sagittis luctus</a>
                        </h2>
                        <div class="ratings"><div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div></div>
                        <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>35.00</span></div>

                      </div>
                    </div>
                    <div class="clearfix"></div>

                  </div>
                </div><div class="item-col col-xs-12 col-sm-12 post-2271 product type-product status-publish has-post-thumbnail product_cat-fashion first instock shipping-taxable purchasable product-type-simple slick-slide slick-active" index="2" style="width: 300px;">
                  <div class="product-wrapper">

                    <div class="list-col4 ">
                      <div class="product-image">
                        <a href="https://demo.roadthemes.com/james/shop/fashion/fermentum-eros/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">					<img width="500" height="500" src="//demo.roadthemes.com/james/wp-content/uploads/2014/10/12-500x500.jpg" class="primary_image wp-post-image" alt="12" srcset="//demo.roadthemes.com/james/wp-content/uploads/2014/10/12-500x500.jpg 500w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/12-150x150.jpg 150w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/12-300x300.jpg 300w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/12-768x768.jpg 768w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/12-600x600.jpg 600w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/12-200x200.jpg 200w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/12.jpg 800w" sizes="(max-width: 500px) 100vw, 500px"><img width="500" height="500" src="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14-500x500.jpg" class="secondary_image" alt="14" srcset="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14-500x500.jpg 500w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14-150x150.jpg 150w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14-300x300.jpg 300w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14-768x768.jpg 768w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14-600x600.jpg 600w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14-200x200.jpg 200w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/14.jpg 800w" sizes="(max-width: 500px) 100vw, 500px">				</a>				<div class="actions">
                        <ul class="add-to-links clearfix">
                          <li>
                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">

                              <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>90.00</span>
                              <a rel="nofollow" href="/james/shop/footwear/aenean-sagittis/?add-to-cart=2271" data-quantity="1" data-product_id="2271" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </p>						</li>

                          <li class="quickviewbtn">
                            <a class="detail-link quickview" data-quick-id="2271" href="https://demo.roadthemes.com/james/shop/fashion/fermentum-eros/" title="Fermentum eros">Quick View</a>
                          </li>

                          <li>

                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2271">
                              <div class="yith-wcwl-add-button show" style="display:block">


                                <a href="/james/shop/footwear/aenean-sagittis/?add_to_wishlist=2271" rel="nofollow" data-product-id="2271" data-product-type="simple" class="add_to_wishlist">
                                  Add to Wishlist</a>

                              </div>

                              <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                <span class="feedback">Product added!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                <span class="feedback">The product is already in the wishlist!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div style="clear:both"></div>
                              <div class="yith-wcwl-wishlistaddresponse"></div>

                            </div>

                            <div class="clear"></div>						</li>
                          <li>
                            <div class="woocommerce product compare-button"><a href="https://demo.roadthemes.com/james?action=yith-woocompare-add-product&amp;id=2271&amp;lang=en" class="compare button" data-product_id="2271" rel="nofollow">Compare</a></div>						</li>
                        </ul>

                      </div>
                        <div class="list-col2">
                          <div class="list-col8 ">
                            <div class="gridview">
                              <h2 class="product-name">
                                <a href="https://demo.roadthemes.com/james/shop/fashion/fermentum-eros/">Fermentum eros</a>
                              </h2>
                              <div class="ratings"><div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div></div>
                              <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>90.00</span></div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div class="list-col8 ">
                      <div class="gridview">
                        <h2 class="product-name">
                          <a href="https://demo.roadthemes.com/james/shop/fashion/fermentum-eros/">Fermentum eros</a>
                        </h2>
                        <div class="ratings"><div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div></div>
                        <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>90.00</span></div>

                      </div>
                    </div>
                    <div class="clearfix"></div>

                  </div>
                </div><div class="item-col col-xs-12 col-sm-12 post-2293 product type-product status-publish has-post-thumbnail product_cat-fashion first instock shipping-taxable purchasable product-type-simple slick-slide slick-active" index="3" style="width: 300px;">
                  <div class="product-wrapper">

                    <div class="list-col4 ">
                      <div class="product-image">
                        <a href="https://demo.roadthemes.com/james/shop/fashion/vivamus-blandit/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">					<img width="500" height="500" src="//demo.roadthemes.com/james/wp-content/uploads/2014/10/8-500x500.jpg" class="primary_image wp-post-image" alt="8" srcset="//demo.roadthemes.com/james/wp-content/uploads/2014/10/8-500x500.jpg 500w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/8-150x150.jpg 150w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/8-300x300.jpg 300w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/8-768x768.jpg 768w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/8-600x600.jpg 600w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/8-200x200.jpg 200w, //demo.roadthemes.com/james/wp-content/uploads/2014/10/8.jpg 800w" sizes="(max-width: 500px) 100vw, 500px"><img width="500" height="500" src="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9-500x500.jpg" class="secondary_image" alt="9" srcset="https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9-500x500.jpg 500w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9-150x150.jpg 150w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9-300x300.jpg 300w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9-768x768.jpg 768w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9-600x600.jpg 600w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9-200x200.jpg 200w, https://demo.roadthemes.com/james/wp-content/uploads/2014/10/9.jpg 800w" sizes="(max-width: 500px) 100vw, 500px">				</a>				<div class="actions">
                        <ul class="add-to-links clearfix">
                          <li>
                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">

                              <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>65.00</span>
                              <a rel="nofollow" href="/james/shop/footwear/aenean-sagittis/?add-to-cart=2293" data-quantity="1" data-product_id="2293" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </p>						</li>

                          <li class="quickviewbtn">
                            <a class="detail-link quickview" data-quick-id="2293" href="https://demo.roadthemes.com/james/shop/fashion/vivamus-blandit/" title="Vivamus blandit">Quick View</a>
                          </li>

                          <li>

                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2293">
                              <div class="yith-wcwl-add-button show" style="display:block">


                                <a href="/james/shop/footwear/aenean-sagittis/?add_to_wishlist=2293" rel="nofollow" data-product-id="2293" data-product-type="simple" class="add_to_wishlist">
                                  Add to Wishlist</a>

                              </div>

                              <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                <span class="feedback">Product added!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                <span class="feedback">The product is already in the wishlist!</span>
                                <a href="https://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist	        </a>
                              </div>

                              <div style="clear:both"></div>
                              <div class="yith-wcwl-wishlistaddresponse"></div>

                            </div>

                            <div class="clear"></div>						</li>
                          <li>
                            <div class="woocommerce product compare-button"><a href="https://demo.roadthemes.com/james?action=yith-woocompare-add-product&amp;id=2293&amp;lang=en" class="compare button" data-product_id="2293" rel="nofollow">Compare</a></div>						</li>
                        </ul>

                      </div>
                        <div class="list-col2">
                          <div class="list-col8 ">
                            <div class="gridview">
                              <h2 class="product-name">
                                <a href="https://demo.roadthemes.com/james/shop/fashion/vivamus-blandit/">Vivamus blandit</a>
                              </h2>
                              <div class="ratings"><div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div></div>
                              <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>65.00</span></div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div class="list-col8 ">
                      <div class="gridview">
                        <h2 class="product-name">
                          <a href="https://demo.roadthemes.com/james/shop/fashion/vivamus-blandit/">Vivamus blandit</a>
                        </h2>
                        <div class="ratings"><div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div></div>
                        <div class="price-box"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>65.00</span></div>

                      </div>
                    </div>
                    <div class="clearfix"></div>

                  </div>
                </div></div></div>
              </div>
            </div>
          </div>

        </div>
      </div><!-- #product-2266 -->


    </div>

  </div>
</template>

<script>
import HeaderShop from "../components/Header-Shop";
import CartSideBar from "../components/CartSideBar";
import {mapActions, mapGetters} from "vuex";
import {isEmptyObject} from "../helpers";
import CartBottom from "../components/CartBottom";
import {config} from "../constants/config";

export default {
  name: "DetailShop",
  data() {
    return {
      product :null,
      sizeSet: 0,
      colorSet: 0,
      qty: 1,
      tab: 2,
      rate: 1,
      listOther: [],
      listComment: [],
      comment:'',
      isShowRating: true,
    }
  },
  computed:{
    ...mapGetters(['getterListItemInCart','getStatusLogin'])
  },
  methods: {
    ...mapActions(['getDetailProduct','rateProduct','getListRating']),
    ratingAPI(){
      if(this.comment === ''){
        alert('Vui lòng nhập đánh giá !')
        return false;
      }
      let obj = {
        product_id : this.$route.params.id,
        guest_id : JSON.parse(localStorage.getItem('USER_INFO')).id,
        rate : this.rate,
        comment : this.comment
      }
      console.log('obj', obj)
      this.rateProduct(obj).then(r=>{
        alert('Cảm ơn bạn đã đánh giá sản phẩm của chúng tôi !')
        this.isShowRating = false
      }).catch(e=>{
        console.log(e)
      })
    },
    showTab(index){
      this.tab = index
    },
    sendimg(a) {
      document.getElementById('mainimg').src = a.src;
    },
    getPathFile(path){
      return config.url_api_back_end_real + path
    },
    setSize(size){
      this.sizeSet = size
    },
    setColor(color){
      this.colorSet = color
    },
    addToCart(){
      if (this.qty <= 0){
        alert('Chọn số lượng !')
        return false;
      }
      if (this.sizeSet == 0){
        alert('Chọn size sản phẩm !')
        return false;
      }
      if (this.colorSet == 0){
        alert('Chọn màu sắc sản phẩm !')
        return false;
      }
      let carts = this.getterListItemInCart
      console.log('carts', carts)
      let obj = {
        product: this.product.detail,
        attribute: {
          size : this.sizeSet,
          color : this.colorSet,
        },
        qty: parseInt(this.qty)
      }
      // check sp ton tai
      let flag = carts.findIndex(x => x.product.id == this.$route.params.id && parseInt(x.attribute.size) == parseInt(this.sizeSet) && x.attribute.color === this.colorSet);
      console.log(flag)
      if (flag !== -1){
        carts[flag].qty =  carts[flag].qty + parseInt(this.qty)
      }else{
        carts.push(obj)
      }
      localStorage.setItem('carts', JSON.stringify(carts))
      this.$store.commit('SET_LIST_ITEM_IN_CART',JSON.stringify(carts))
      alert('Đã thêm vào giỏ hàng !')
    },
    rateStar(star){
      this.rate = star
    }
  },
  created() {
    this.getDetailProduct(this.$route.params.id).then(r=>{
      console.log('res getDetailProduct', r)
      this.product = r.data.data
      this.listOther = r.data.data.other
    }).catch(e=>{
      console.log(e)
    })

    let url = `/api/web/rating/getByProduct?product=${this.$route.params.id}`
    if (this.getStatusLogin){
      url += `&user=${JSON.parse(localStorage.getItem('USER_INFO')).id}`
    }
    this.getListRating(url).then(r=>{
      console.log('res getListRating', r)
      this.listComment = r.data.data.list
      if (r.data.data.is_comment === false){
        this.isShowRating = false
      }else{

      }
    }).catch(e=>{
      console.log(e)
    })
  }
}
</script>
<style scoped>
.fa-star.checked{
  color: orange;
}
#thumb_container {
  text-align: center;
  padding: 0px;
}

#thumb_container img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border: solid 1px lightgray;
  padding: 5px;
}

#main_image {
  border: solid 1px lightgray;

}

#main_image img {
  width: 100%;
}
.main-container .product-view .summary.single-product-info .yith-wcwl-add-to-wishlist a:before{
  content: "" !important;
}
.main-container .product-view .summary.single-product-info .yith-wcwl-add-to-wishlist a.active {
  background-color: #f25862;
  color: #fff;
  border-color: #f25862;
}
.star-rate{
  cursor: pointer;
  font-size: 18px;
  padding-right: 8px;
}
#comments,#review_form_wrapper{
  max-width: unset !important;
}
</style>
